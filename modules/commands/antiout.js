module.exports.config = {
    name: "antiout",
    version: "1.0.0",
    credits: "aizen code",
    hasPermssion: 1,
    description: "antiout [on/off]",
    usages: "antiout on/off",
    commandCategory: "system",
    cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["antiout"] == "undefined" || data["antiout"] == false) data["antiout"] = true;
    else data["antiout"] = false;
    
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(parseInt(event.threadID), data);
    
    return api.sendMessage(`✅Đã ${(data["antiout"] == true) ? "bật" : "tắt"} thành công antiout!`, event.threadID);

}