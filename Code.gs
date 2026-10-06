function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Anthology Hub — Public Demo')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getDemoState() {
  var raw = PropertiesService.getUserProperties().getProperty('ANTHOLOGY_PUBLIC_DEMO');
  if (!raw) return emptyDemoState_();
  try {
    var parsed = JSON.parse(raw);
    return Object.assign(emptyDemoState_(), parsed || {});
  } catch (err) {
    return emptyDemoState_();
  }
}

function saveDemoState(state) {
  var clean = sanitizeState_(state || {});
  PropertiesService.getUserProperties().setProperty('ANTHOLOGY_PUBLIC_DEMO', JSON.stringify(clean));
  return { ok: true, savedAt: new Date().toISOString(), state: clean };
}

function resetDemoState() {
  PropertiesService.getUserProperties().deleteProperty('ANTHOLOGY_PUBLIC_DEMO');
  return { ok: true, state: emptyDemoState_() };
}

function emptyDemoState_() {
  return { notes: {}, highlights: {}, visited: [], updatedAt: null };
}

function sanitizeState_(state) {
  function safeObject(value) {
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  }
  var visited = Array.isArray(state.visited) ? state.visited.map(String).slice(0, 50) : [];
  return {
    notes: safeObject(state.notes),
    highlights: safeObject(state.highlights),
    visited: visited,
    updatedAt: new Date().toISOString()
  };
}