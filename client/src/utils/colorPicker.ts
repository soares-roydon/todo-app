function colorPicker() {
  const colors = [
    "bg-blue-400",
    "bg-green-400",
    "bg-violet-400",
    "bg-pink-400",
    "bg-orange-400",
    "bg-red-400",
    "bg-indigo-400",
    "bg-purple-400",
    "bg-yellow-400",
    "bg-gray-400",
    "bg-rose-400"
  ];
  const color = colors[Math.round(Math.random() * 10)];

  return color;
}

export default colorPicker;
