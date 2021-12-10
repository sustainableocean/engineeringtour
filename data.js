var APP_DATA = {
  "scenes": [
    {
      "id": "0-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "1-along-engineering-drive-1"
        },
        {
          "yaw": 1.469010686641715,
          "pitch": 0.4375469924065545,
          "rotation": 0,
          "target": "1-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4403025430133365,
          "pitch": 0.1487341810892957,
          "title": "Faculty of Engineering",
          "text": "Welcome to Faculty of Engineering"
        }
      ]
    },
    {
      "id": "1-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.27364422619309003,
        "pitch": 0.2776761765738591,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 2.4716637676792823,
          "pitch": -0.028778891640156345,
          "rotation": 0,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.009636137015222701,
          "pitch": 0.3290310668435694,
          "title": "Engineering Drive&nbsp;",
          "text": "Welcome to the Engineering Drive"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.33189121296756596,
        "pitch": 0.05883143008209046,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.0810686821040179,
          "pitch": -0.37348594669905566,
          "rotation": 0,
          "target": "0-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2610092404736228,
          "pitch": -0.06772684492448633,
          "title": "Engineering Auditorium&nbsp;",
          "text": "Welcome to the Engineering Auditorium"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
