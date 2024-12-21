const van = require("../../assets/images/comeCariImage/van.png")
const van2 = require("../../assets/images/comeCariImage/van3.png")

const van3 = require("../../assets/images/comeCariImage/van2.png")
const truck = require("../../assets/images/comeCariImage/truck.png")


export const Trucks = [
    {
      "type": "Flatbed Truck",
      "description": "A flatbed truck with an open cargo area for versatile cargo transport.",
      "maxTons": 10,
      "width": "2.5 meters",
      "length": "6 meters",
      "height": "1.5 meters",
      "goodsTypes": ["Construction Materials", "Machinery", "Steel"],
      "image": van
      
    },
    {
      "type": "Refrigerated Truck",
      "description": "A refrigerated truck for transporting temperature-sensitive goods.",
      "maxTons": 5,
      "width": "2.3 meters",
      "length": "7 meters",
      "height": "2.5 meters",
      "goodsTypes": ["Perishable Food", "Medical Supplies"],
      "image": van2
    },
    {
      "type": "Box Truck",
      "description": "A box truck with an enclosed cargo area for secure transport.",
      "maxTons": 7,
      "width": "2.4 meters",
      "length": "5 meters",
      "height": "2.2 meters",
      "goodsTypes": ["Electronics", "Furniture", "Textiles"],
      "image": van3

    },
    {
      "type": "Tanker Truck",
      "description": "A tanker truck for transporting liquids or gases.",
      "maxTons": 8,
      "width": "2.6 meters",
      "length": "8 meters",
      "height": "2.7 meters",
      "goodsTypes": ["Petroleum Products", "Chemicals"],
      "image": van3

    },
    {
      "type": "Dump Truck",
      "description": "A dump truck with a hydraulic bed for carrying loose materials.",
      "maxTons": 12,
      "width": "2.8 meters",
      "length": "7.5 meters",
      "height": "3 meters",
      "goodsTypes": ["Sand", "Gravel", "Construction Waste"],
      "image": truck
    }
  ]
  