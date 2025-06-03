export async function fetchStudents() {
  const response = await fetch('http://localhost:8085/api/students');
  if (!response.ok) throw new Error('Failed to fetch students');
  return await response.json();
}