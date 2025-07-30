const mockProjects = [
  { id: 1, name: 'Penetration Test for Bank' },
  { id: 2, name: 'SWIFT CSP Compliance Review' }
];

export async function getAllProjects() {
  return mockProjects;
}
