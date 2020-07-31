define({ "api": [
  {
    "type": "get",
    "url": "/people/near/:city/within/:distance",
    "title": "Get Near City",
    "name": "httpGetNearCity",
    "group": "People",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The city to get people in and nearby to.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "distance",
            "description": "<p>How many miles is considered nearby to the target city.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"state\": \"ok\",\n  \"code\": 200,\n  \"messages\": [],\n  \"result\": {\n    \"people\": [\n      {\n        \"id\": 135,\n        \"first_name\": \"Mechelle\",\n        \"last_name\": \"Boam\",\n        \"email\": \"mboam3q@thetimes.co.uk\",\n        \"ip_address\": \"113.71.242.187\",\n        \"latitude\": -6.5115909,\n        \"longitude\": 105.652983\n      },\n      {\n        \"id\": 396,\n        \"first_name\": \"Terry\",\n        \"last_name\": \"Stowgill\",\n        \"email\": \"tstowgillaz@webeden.co.uk\",\n        \"ip_address\": \"143.190.50.240\",\n        \"latitude\": -6.7098551,\n        \"longitude\": 111.3479498\n      }\n    ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "packages/api/src/endpoint/people/people.controller.ts",
    "groupTitle": "People"
  }
] });
