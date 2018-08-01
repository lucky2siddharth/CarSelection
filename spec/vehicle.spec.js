var request = require("request");

var base_url = "http://127.0.0.1:3000/"

describe("Get all vehicle data", function() {
  describe("GET vehicles/", function() {
    it("returns status code 200", function(done) {
      request.get(base_url+'vehicles', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

  describe("GET vehicles/:make/:model image", function() {
    it("returns status code 200", function(done) {
      request.get(base_url+'vehicles/Ford/Edge', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    it("returns status code 404", function(done) {
      request.get(base_url+'vehicles/Ford/xyz', function(error, response, body) {
        expect(response.statusCode).toBe(404);
        done();
      });
    });
  });

});