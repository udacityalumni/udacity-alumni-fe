export default function calculateLoading(
  images,
  imagesLoading,
  createLoading,
  updateLoading,
  deleteLoading,
) {
  return !images || imagesLoading || createLoading || deleteLoading;
}
