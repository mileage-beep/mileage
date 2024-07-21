// Helper function to format duration in minutes and seconds
export const formatDuration = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins > 0 ? `${mins} min${mins > 1 ? "s" : ""} ` : ""}${secs} sec${
    secs !== 1 ? "s" : ""
  }`;
};

// Helper function to handle duration change
export const handleDurationChange = (value) => {
  return value * 15;
};
