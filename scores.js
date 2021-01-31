function getLevels(assignments){
    var score = (assignments.length)*10
    if (score<10){
        return 0
    }else if  (score >=10 && score <50){
        return 1
    }else if (score>=20 && score <100){
        return 2
    }else if (score>=100 && score <150){
        return 3
    }else if (score>=150 && score <200){
        return 4 
    }else if (score>=200 && score<250){
        return 5
    }else if (score>=250 && score<300){
        return 6
    }else if (score>=300 && score<350){
        return 7
    }else if (score>=400 && score<450){
        return 8
    }else if (Score>=450 && score<500){
        return 9
    }else if (score>=500){
        return 10
    }
    return 0
}
