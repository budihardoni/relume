const STORAGE_KEY = 'relume-os-project';

export const projectStore = {
  load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    } catch {
      return null;
    }
  },
  save(project) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(project));
    return project;
  },
  clear() {
    localStorage.removeItem(STORAGE_KEY);
  },
};
