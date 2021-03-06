## Functions

<dl>
<dt><a href="#setOpacity">setOpacity(hexColor, opacity)</a></dt>
<dd><p>Set the opacity of a hex color</p>
</dd>
<dt><a href="#fromColorStringToRGBA">fromColorStringToRGBA(colorString)</a></dt>
<dd><p>Converts a color string to an rgba string</p>
</dd>
<dt><a href="#getContrastingColor">getContrastingColor(hexColor)</a></dt>
<dd><p>Given a hex color, return the color that would be the best contrast</p>
</dd>
</dl>

<a name="setOpacity"></a>

## setOpacity(hexColor, opacity)
Set the opacity of a hex color

**Kind**: global function  
**Returns**: The hex color with the opacity added to the end.  

| Param | Description |
| --- | --- |
| hexColor | the hex color code without the # symbol |
| opacity | a number between 0 and 1 |

<a name="fromColorStringToRGBA"></a>

## fromColorStringToRGBA(colorString)
Converts a color string to an rgba string

**Kind**: global function  
**Returns**: The RGBA values of the color.  

| Param | Description |
| --- | --- |
| colorString | The color string to convert to an RGBA value. |

<a name="getContrastingColor"></a>

## getContrastingColor(hexColor)
Given a hex color, return the color that would be the best contrast

**Kind**: global function  
**Returns**: a string.  

| Param | Description |
| --- | --- |
| hexColor | the hex color code to convert to a contrasting color. |

