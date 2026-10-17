export async function getStaticPaths() {
  const categories = ['Breathing', 'Sleep', 'Mindfulness', 'Research'];
  return categories.map(category => ({
    params: { category: category.toLowerCase() },
    props: { category }
  }));
}
