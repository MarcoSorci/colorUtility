/**
 * Set the opacity of a hex color
 * @param hexColor - the hex color code without the # symbol
 * @param opacity - a number between 0 and 1
 * @returns The hex color with the opacity added to the end.
 */
export function setOpacity(hexColor, opacity) {
  return hexColor + opacity.toString(16);
}

/**
 * Converts a color string to an rgba string
 * @param colorString - The color string to convert to an RGBA value.
 * @returns The RGBA values of the color.
 */
export function fromColorStringToRGBA(colorString) {
  if (document) {
    const canvas = document.createElement("canvas");
    canvas.height = 1;
    canvas.width = 1;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    return ctx.getImageData(0, 0, 1, 1).data;
  } else {
    let hex = colorString.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    if (hex.length > 6) {
      const a = ", " + parseInt(hex.substring(6, 8), 16);
    }
    return "rgba(" + r + ", " + g + ", " + b + a + ")";
  }
}

/**
 * Given a hex color, return the color that would be the best contrast
 * @param hexColor - the hex color code to convert to a contrasting color.
 * @returns a string.
 */
export function getContrastingColor(hexColor) {
  return parseInt(hexColor.replace("#", ""), 16) > 0xffffff / 2
    ? "#000"
    : "#fff";
}

console.log(getContrastingColor("#fdffe0"));
console.log(fromColorStringToRGBA("#fdffe0"));
