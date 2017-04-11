var schema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://foo.bar/schemas/schema.json",
    "additionalProperties": false,
    "title": "SampleSchema",
    "description": "A sample schema Rule",
    "type": "object",
    "properties": {
        "_id": {
            "description": "This is a required field",
            "type": "integer",
            "required":true
        },
        "url": {
            "description": "field to test validation for a url",
            "type": "string",
            "pattern": /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/
        },
        "email": {
            "description": "field to test validation for a email",
            "type": "string",
            "format": "email",
            "required":true
        },
        "date": {
            "description": "field to test validation for a date",
            "type": "string",
            "format": "date-time"
        },
        "postcode": {
            "description": "field to test validation for a postcode",
            "type": "string",
            "pattern": /(GIR 0AA)|((([A-Z-[QVX]][0-9][0-9]?)|(([A-Z-[QVX]][A-Z-[IJZ]][0-9][0-9]?)|(([A-Z-[QVX]][0-9][A-HJKSTUW])|([A-Z-[QVX]][A-Z-[IJZ]][0-9][ABEHMNPRVWXY]))))[ - ][0-9][A-Z-[CIKMOV]]{2})/
        },
        "wholeNumber": {
            "description": "field to test validation for a whole numbers",
            "type": "integer",
            "minimum": 0
        },
        "decimalNumber": {
            "description": "field to test validation for a decimal number",
            "type": "number"
        },
        "emptyString": {
            "description": "field to test validation for an empty string",
            "type": "string",
            "minLength": 1
            //"pattern": /.*\\S+.*/
        },
        "lookupField": {
            "description": "field to test that only some set of values are allowed",
            "type": "string",
            "enum": ["monday", "tuesday", "wednesday"]
        },
        "range": {
            "description": "field to test validation for a range",
            "type": "integer",
            "minimum": 0,
            "maximum": 100
        },
        "alphaNumerics": {
            "description": "field to tes validation for alphanumeric",
            "type": "string",
            "pattern": /^(?![0-9]*$)[a-zA-Z0-9]+$/
        },
        "address": {
            "type": "object",
            "required": true,
            "properties": {
                "street": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "town": {
                    "type": "string",
                    "required": true
                },
                "no": {
                    "type": "string",
                    "dependencies": "street"
                }
            },
            "anyOf": [
                {
                    "properties": {
                        "name": {
                            "type": "string",
                            "required": true
                        }
                    }
                }
            ]
        }


    }
};

module.exports = schema;

