import { getAllProjects } from '../models/projectModel';

export async function listProjects(req, res) {
  const projects = await getAllProjects();
  res.json(projects);
}
