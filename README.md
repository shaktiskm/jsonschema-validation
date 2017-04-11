# jsonschema-validation

# Run the app
```
node app.js

```

# For Validating the JSON payload according to schema
```
POST [http://localhost:4000/validate]

data 

{
    "_id": 0,
    "email": "a@a.in",
    "url": "http://gmail.com",
    "date": "2015-01-20T17:10:05.247055+00:00",
    "wholeNumber": 0,
    "decimalNumber": 5.52,
    "emptyString": "hello",
    "lookupField": "monday",
    "range": 100,
    "alphaNumerics": "A",
    "address": {
      "name": "London",
      "town": "earls court"
    }
}

response 200 OK

{
  "status": "done"
}

```
