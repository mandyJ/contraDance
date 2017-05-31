import * as floorUnits from "./../../src/danceFloor/floorUnits";

describe("(floorUnits)", () => {
   it("floorPositionInAtoms should translate from position in array to position on danceFloor by atoms", () => {
      expect(floorUnits.floorPositionInAtoms(0)).toEqual({x:3, y:3});
      expect(floorUnits.floorPositionInAtoms(2)).toEqual({x:9, y:3});
      expect(floorUnits.floorPositionInAtoms(3)).toEqual({x:9, y:9});
   }); 
});