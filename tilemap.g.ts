// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001020902020202090902020202090205081313131313131313131313131312030c131313131313100f1313131313130a081313100f13130d0e13100f131313030813130d0e13131313130d0e13131303081313131313131313131313131313030813100f1313100f1313100f131313030c130d0e13130d0e13130d0e1313130a0c13131313131313131313131313130a081313131313100f1313131313131303081313100f130d0e1313100f131313030813130d0e13131313130d0e13131303081313131313131313131313131313030c13131313131313131313131313130a0811131313131313131313131313130304070b070707070b0b070707070b0706`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . 2 2 . . . . . . 2 
2 . . 2 2 . . 2 2 . 2 2 . . . 2 
2 . . 2 2 . . . . . 2 2 . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 . . 2 2 . . 2 2 . . . 2 
2 . 2 2 . . 2 2 . . 2 2 . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . 2 2 . . . . . . . 2 
2 . . 2 2 . 2 2 . . 2 2 . . . 2 
2 . . 2 2 . . . . . 2 2 . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.stairNorth,sprites.dungeon.stairEast,sprites.dungeon.floorLightMoss], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
