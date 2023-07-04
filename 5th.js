class phone{ 
    constructor(feature1 , feature2){
        this.Feature1 = feature1,
        this.Feature2 = feature2

    }
parents(){
    console.log("1st  one is parent funtion"  )
}
}


class Smartphone{
    constructor(camera,games,internet,touch_function){
        this.New_feature1 = camera,
        this.New_feature2 = games ,
        this.New_feature3 = internet ,
        this.New_feature4 = touch_function
    }
    msg(){
        console.log("2nd  one is child funtion");
    }
    
}
let phones = new phone("incommingCall" , "OutgoingCall");
console.log(phones)
let Mobiles = new Smartphone("64MP camera ", "CLASH OF CLAN" ,"Internet", "touch");
console.log(Mobiles)
phones.parents();
Mobiles.msg();














