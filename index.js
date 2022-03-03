function superbowlWin(record){
    const win = record.find(record => record.result === 'W');
    console.log (win);
        if (win){
     return (`${win.year}`);
    }
}