const van = require("../assets/images/truck/van.png")
const van2 = require("../assets/images/truck/van3.png")

const van3 = require("../assets/images/truck/van2.png")
const truck = require("../assets/images/truck/truck.png")

const FLAT_BED = require("../assets/images/truck/flatbed.png")
const FLAT_BED_SIDEKIT = require("../assets/images/truck/flatbed-sidekit.png")
const STEP_DECK = require("../assets/images/truck/flatbed.png")
const RGN = require("../assets/images/truck/rgn.png")
const DOUBLE_DROP = require("../assets/images/truck/double-drop.png")
const LOWBOY = require("../assets/images/truck/lowboy.png")
const CONESTOGA = require("../assets/images/truck/conestoga.png")
const POWER_ONLY = require("../assets/images/truck/poweronly.png")
const REEFER = require("../assets/images/truck/reefer.png")
const VAN = require("../assets/images/truck/van.png")

export const Trucks = [
    {
      "type": "Flatbed",
      "description": "A versatile flatbed trailer designed for transporting a wide range of cargo. With various lengths and widths available, flatbeds are commonly used in the transportation industry. They provide an open and unobstructed platform, making them suitable for hauling large and oddly shaped items, construction materials, and equipment. Their flat, open design allows for easy loading and unloading, and the maximum weight capacity depends on the specific truck and trailer configuration.",
      "maxTons": null,
      "value": "FLAT_BED",
      "width": "102 inches",
      "length": "Varies (typically 24 to 53 feet)",
      "height": "60 inches",
      "goodsTypes": [],
      "image": FLAT_BED
    },
    {
      "type": "Flatbed with Side Kit",
      "description": "A flatbed trailer with 4-foot-high sides and bows, often used to transport smaller cargo or items that require protection from the elements. The side kit can be added to a standard flatbed to create a semi-enclosed space for freight. The inside height typically measures 6 feet at the center and 4 feet on the sides. Weight capacity depends on the specific configuration and cargo being transported.",
      "maxTons": null,
      "width": "102 inches",
      "length": "Varies (typically 24 to 53 feet)",
      "height": "6 feet (center) and 4 feet (sides)",
      "goodsTypes": [],
      "value": "FLAT_BED_SIDEKIT",
      "image": FLAT_BED_SIDEKIT
    },
    {
      "type": "Step Deck",
      "description": "A step deck trailer similar to a flatbed but with a drop in the deck to accommodate taller freight. Step decks are available in various lengths and are designed to carry loads that are too tall for a standard flatbed. They typically have a top deck with a height of 10 to 11 feet and a lower deck, which varies in length depending on the trailer size. The maximum weight capacity is generally lower than that of a flatbed.",
      "maxTons": null,
      "width": "102 inches",
      "length": "Varies (typically 48 to 53 feet)",
      "height": "Depends on cargo",
      "goodsTypes": [],
      "image": STEP_DECK,
      "value": "STEP_DECK"

    },
    {
      "type": "RGN (Removable Goose Neck)",
      "description": "An RGN trailer is specifically designed for loading and transporting larger machinery and oversized cargo. It features a removable gooseneck that can retract to create a ramp for loading equipment. The length of the well is typically 29 feet unless the trailer is extendable. Legal dimensions for an RGN include a height of 12 feet and a width of 8 feet 6 inches. The maximum weight capacity depends on the specific configuration.",
      "maxTons": null,
      "width": "8'6\"",
      "length": "29 feet (extendable)",
      "height": "12 feet",
      "goodsTypes": [],
      "image": RGN,
      "value": "RGN"

    },
    {
      "type": "Lowboy",
      "description": "Lowboy trailers are commonly used for transporting heavy equipment, such as construction machinery. However, they lack the removable gooseneck capability found in RGN trailers. Lowboys have a lower deck closer to the ground, making it easier to load and transport taller equipment. The maximum weight capacity depends on the specific configuration and cargo being transported.",
      "maxTons": null,
      "width": "Depends on cargo",
      "length": "Depends on cargo",
      "height": "Depends on cargo",
      "goodsTypes": [],
      "image": DOUBLE_DROP,
      "value": "DOUBLE_DROP"

    },
    {
      "type": "Double Drop",
      "description": "Double drop trailers are designed for hauling taller equipment that cannot be driven onto the trailer. These trailers have a top deck with a height of about 10 to 11 feet and a lower deck that drops down to approximately 26 to 29 feet, depending on the trailer size. They are often used for crane-loaded cargo. Maximum weight capacity varies based on the trailer's specifications and cargo.",
      "maxTons": null,
      "width": "Depends on cargo",
      "length": "Depends on cargo",
      "height": "Depends on cargo",
      "goodsTypes": [],
      "image": LOWBOY,
      "value": "LOWBOY",
    },
    {
      "type": "Conestoga",
      "description": "A Conestoga trailer is essentially a flatbed with retractable sides, which makes it convenient for transporting items that may require tarping or protection from the elements. The retractable sides are mounted on rails, allowing for easy access to the cargo. The inside height may range from 96 to 99 inches, depending on the trailer. The maximum weight capacity varies according to the trailer's configuration and cargo being transported.",
      "maxTons": null,
      "width": "Depends on cargo",
      "length": "Depends on cargo",
      "height": "96-99 inches",
      "goodsTypes": [],
      "image": CONESTOGA,
      "value": "CONESTOGA"

    },
    {
      "type": "Power Only",
      "description": "A power-only, or tow-away, service involves a truck without a trailer. Drivers connect to a trailer and transport it to its destination. Power-only services are used in various industries, such as moving van and pole trailers in the pipeline industry. The specific requirements for the tow-away service, including trailer compatibility (e.g., pintle hook or ball hitch), depend on the cargo and destination.",
      "maxTons": null,
      "width": "Depends on trailer",
      "length": "Depends on trailer",
      "height": "Depends on trailer",
      "goodsTypes": [],
      "image": POWER_ONLY,
      "value": "POWER_ONLY"

    },
    {
      "type": "Van",
      "description": "Van trailers are one of the most common types of trailers and are ideal for transporting palletized freight. They come in lengths ranging from 48 to 53 feet, with a standard width of 102 inches. The inside height of a van trailer typically matches the width. Van trailers are suitable for a wide range of goods and can generally carry loads of up to 44,000 pounds. It's important to consider the type of door (swing or roll) when using van trailers, as it can affect ease of loading and unloading.",
      "maxTons": 44,
      "width": "102 inches",
      "length": "48 to 53 feet",
      "height": "102 inches",
      "goodsTypes": ["Palletized Freight"],
      "image": VAN,
      "value": "VAN"

    },
    {
      "type": "Reefer",
      "description": "Reefer trailers, short for refrigerated trailers, are similar to van trailers but equipped with insulation and a cooling unit. They are designed for transporting temperature-sensitive cargo that requires climate control. The width of a reefer trailer typically measures 99 to 100 inches due to the insulation in the walls. As with van trailers, reefer trailers come in lengths of 48 to 53 feet and can carry loads of up to 44,000 pounds.",
      "maxTons": 44,
      "width": "102 inches",
      "length": "48 to 53 feet",
      "height": "102 inches",
      "goodsTypes": ["Palletized Freight"],
      "image": REEFER,
      "value": "REEFER"

    }
]
  
  export const maskNumber = (value: { toString: () => any }, start: any, end: any) => {
    const numStr = value.toString();
    const maskedPart = numStr.substring(start, end).replace(/\d/g, '*');
    return numStr.substring(0, start) + maskedPart + numStr.substring(end);
  }