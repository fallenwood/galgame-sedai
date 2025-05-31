import asyncio
import aiohttp
import pyquery
import json
import os

from yarl import URL

years = range(2004, 2025)
# years = range(2004, 2005)

exludingKeywords = [
    "精灵宝可梦",
    "上古卷轴",
    "塞尔达传说",
    "女神异闻录",
    "英雄传说",
    "最终幻想",
    "火焰之纹章",
    "怪物猎人",
    "文明",
    "战神",
    "生化危机",
    "全面战争",
    "轩辕剑",
    "仙剑",
    "GT赛车",
    "洛克人",
    "全面战争",
    "战锤",
    "皇牌空战",
    "使命召唤",
    "瓦力欧",
    "勇者斗恶龙",
    "王国之心",
    "实况足球",
    "鬼武者",
    "鬼泣",
    "极品飞车",
    "伊苏",
    "三国志",
    "信长之野望",
    "明星志愿",
    "超级机器人大战",
    "马里奥",
    "太鼓达人",
    "如龙",
    "风色幻想",
    "明星大乱斗",
    "机动战士高达",
    "魔塔大陆",
    "雷顿教授",
    "欧陆风云",
    "龙珠Z",
    "双星物语",
    "零～",
    "全美职业篮球联赛",
    "极限脱出",
    "龙腾世纪",
    "偶像大师",
    "炼金工房",
    "皮克敏",
    "波斯王子",
    "浪漫沙加",
    "星之卡比",
    "雷曼传奇",
    "马力欧",
    "世界树迷宫",
    "咚奇刚",
    "南方公园",
    "行尸走肉",
    "勇敢的心",
    "异度神剑",
    "星际争霸",
    "节奏天国",
    "神秘海域",
    "极限竞速",
    "初音未来",
    "星露谷物语",
    "逆转裁判",
    "斯普拉遁",
    "异度神剑",
    "寻找天堂",
    "尼尔",
    "半衰期",
    "弹丸论破",
    "仁王",
    "女神转生",
    "歧路旅人",
    "魔界战记",
    "DJMAX",
    "伊苏",
    "勇者斗恶龙",
    "暗喻幻想",
    "圣兽之王",
    "人中之龙"
]

excludings = set([
    # 2006
    "大神",
    "魔塔大陆～在世界终结续咏诗篇的少女～",
    "街 ～命运的交叉点～特别篇",
    # 2007
    "osu!",
    "东方风神录 ～ Mountain of Faith.",
    # 2008
    "侠盗猎车手4",
    # 2009
    "英雄联盟",
    "求生之路2",
    # 2010
    "荒野大镖客：救赎",
    "战神3",
    "辐射：新维加斯",
    # 2011
    "我的世界",
    "上古卷轴5：天际",
    "泰拉瑞亚",
    "传送门2",
    "黑暗之魂",
    "塞尔达传说 天空之剑",
    # 2012
    "战争雷霆",
    "菲斯",
    "符文工房4",
    "欧洲卡车模拟2",
    # 2013
    "侠盗猎车手5",
    "最后生还者",
    "欧陆风云4",
    "刀塔2",
    # 2014
    "以撒的结合：重生",
    "神界：原罪",
    "恶灵附身",
    # 2015
    "锈湖：旅馆",
    "血源诅咒：老猎人版",
    "辐射4",
    "精灵与森林",
    "古墓丽影：崛起",
    "如龙0 誓约之地",
    "命运-冠位指定",
    "传说之下",
    "血源诅咒",
    "巫师3：狂猎",
    "潜龙谍影5 幻痛",
    "王者荣耀",
    "中二节奏",
    # 2016
    "战地1",
    "毁灭战士",
    "黑暗之魂3",
    "泰坦天降2",
    "钢铁雄心4",
    "奥丁领域 里普特拉西尔",
    "群星",
    "文明6",
    "羞辱2",
    "崩坏3",
    # 2017
    "仁王",
    "掠食",
    "绝地求生",
    "怪物猎人XX Nintendo Switch版",
    "BanG Dream! 少女乐团派对！",
    "塞尔达传说 旷野之息",
    "空洞骑士",
    "碧蓝航线",
    "神界：原罪2",
    "超级马力欧 奥德赛",
    "底特律：化身为人",
    # 2018
    "雀魂麻将",
    "荒野大镖客：救赎2",
    "天国：拯救",
    "喵斯快跑",
    "怪物猎人：世界",
    "旺达与巨像 重制版",
    "黑暗之魂 Remastered",
    "公主连结 Re:Dive",
    "极限竞速 地平线4",
    "边缘世界",
    "偶像大师 闪耀色彩",
    "死亡细胞",
    "冰汽时代",
    "Wallpaper Engine：壁纸引擎",
    "任天堂明星大乱斗 特别版",
    "战双帕弥什",
    "控制",
    "火焰之纹章 风花雪月",
    "血污：夜之仪式",
    "噬血代码",
    "帝国时代II：决定版",
    "Apex 英雄",
    "美好的每一天 ～不连续的存在～全语音HD版",
    # 2019
    "明日方舟",
    "星际拓荒",
    "只狼：影逝二度",
    "杀戮尖塔",
    "死亡搁浅",
    "舞萌DX",
    "菲格罗斯",
    "鬼泣5",
    "生化危机2 重制版",
    "精灵与萤火意志",
    "女神异闻录5 皇家版",
    # 2020
    "无畏契约",
    "宇宙机器人 无线控制器使用指南",
    "对马岛之魂",
    "最后生还者2",
    "幽灵行者",
    "灵魂摆渡人",
    "蛇之命",
    "世界计划 缤纷舞台！ feat. 初音未来",
    "原神",
    "赛博朋克 2077",
    "OMORI",
    "毁灭战士 永恒",
    "集合啦！动物森友会",
    # 2021
    "蔚蓝档案",
    "死亡搁浅：导演剪辑版",
    "双人成行",
    "赛马娘 Pretty Derby",
    "以撒的结合：忏悔",
    "邪恶冥刻",
    "废墟图书馆",
    "密特罗德 生存恐惧",
    "漫威银河护卫队",
    "怪物猎人 崛起",
    "开拓者：正义之怒",
    "GRIME",
    "罪恶装备 -奋战-",
    "塞尔达传说 御天之剑 HD",
    # 2022
    "星之卡比 探索发现",
    "蓓优妮塔3",
    "怪物猎人崛起：曙光",
    "维多利亚3",
    "胜利女神：妮姬",
    "炽焰天穹",
    "艾尔登法环",
    "游戏王 大师决斗",
    "战神 诸神黄昏",
    "宝可梦 紫",
    "师父",
    "帕特里克的箱子无穷奇遇",
    "跑车浪漫旅7",
    "最后生还者：第一部 重制版",
    "隐迹渐现",
    "守望先锋2",
    "宝可梦传说 阿尔宙斯",
    "信号",
    # 2023
    "死亡岛2",
    "棕色尘埃2",
    "赛博朋克 2077：往日之影",
    "边狱巴士公司",
    "火焰之纹章：结合",
    "匹诺曹的谎言",
    "尘白禁区",
    "少女前线2：追放",
    "vivid/stasis",
    "完美音浪",
    "崩坏：星穹铁道",
    "博德之门3",
    "塞尔达传说 王国之泪",
    "巴别塔圣歌",
    "机战佣兵VI 境界天火",
    "生化危机4 重制版",
    "街头霸王6",
    "霍格沃茨之遗",
    "重返未来：1999",
    "潜水员戴夫",
    "漫威蜘蛛侠2",
    "超级马力欧兄弟 惊奇",
    # 2024
    "鸣潮",
    "动物井",
    "学园偶像大师",
    "绝区零",
    "小丑牌",
    "剑星",
    "三角洲行动",
    "寂静岭2",
    "黑神话：悟空",
    "超时空方舟",
    "浪人崛起",
    "铁拳8",
    "绝地潜兵2",
    "塞尔达传说 智慧的再现",
    "最后生还者：第二部 Remastered",
    "女神异闻录：夜幕魅影",
    "女神异闻录3 Reload",
    "暗喻幻想：ReFantazio",
    "最终幻想7 重生",
    "碧蓝幻想 Relink",
    "真・女神转生V Vengeance",
    "人中之龙8",
    "逆转检察官1&2 御剑精选集",
    # others
    "逆转裁判3",
    "潜龙谍影3 食蛇者",
    "魔兽世界",
    "精灵宝可梦 绿宝石",
    "英雄传说6：空之轨迹",
    "半衰期2",
    "零～红蝶～",
    "东方永夜抄 ～ Imperishable Night.",
    "塞尔达传说 缩小帽",
    "太阁立志传5",
    "侠盗猎车手：圣安地列斯",
    "洛奇",
    "数码恶魔传说：天魔变",
    "密特罗德 零点任务",
    "影之心2",
    "汪达与巨像",
    "王国之心2",
    "超级机器人大战OG2",
    "忍者龙剑传 黑之章",
    "生化危机4",
    "深渊传说",
    "押忍！战斗！应援团",
    "鬼泣3",
    "钢铁雄心2",
    "数码恶魔传说：天魔变2",
    "第3次超级机器人大战α 去往终焉的银河",
    "文明4",
    "零～刺青之声～",
    "幻想三国志2",
    "马力欧卡丁车DS",
    "人见人爱的块魂",
    "战神",
    "欢迎来到 动物之森",
    "风色幻想4～圣战的终焉～",
    "凡人物语",
    "火焰之纹章 苍炎的轨迹",
    "英雄传说：空之轨迹SC",
    "皇牌空战零：贝尔卡战争",
    "塞尔达传说：黄昏公主",
    "北欧女神2 希尔梅丽娅",
    "地球冒险3",
    "节奏天国",
    "New 超级马力欧兄弟",
    "精灵宝可梦 钻石",
    "俄罗斯方块 DS",
    "精灵宝可梦 珍珠",
    "女神异闻录3",
    "最终幻想12",
    "超级马力欧银河",
    "燃烧吧！热血旋律魂 押忍！战斗！应援团2",
    "使命召唤4：现代战争",
    "传送门",
    "超级机器人大战OG 原创世纪合集",
    "核心危机 -最终幻想7-",
    "战神2",
    "奥丁领域",
    "半衰期2：第二章",
    "火焰之纹章 晓之女神",
    "塞尔达传说：幻影沙漏",
    "怪物猎人携带版2",
    "超级机器人大战W",
    "雷顿教授与恶魔之箱",
    "Ruina 废都物语",
    "潜龙谍影4 爱国者之枪",
    "忍者龙剑传 II",
    "雷顿教授与最后的时间旅行",
    "女神异闻录4",
    "精灵宝可梦 白金",
    "节奏天国 金",
    "战争机器",
    "战争机器2",
    "半衰期2：第一章",
    "数字战斗模拟",
    "东方绯想天 ～ Scarlet Weather Rhapsody.",
    "超级机器人大战Z",
    "任天堂明星大乱斗X",
    "小朋友齐打交2",
    "遥远时空中4",
    "沙盘玩具",
    "海猫鸣泣之时散",
    "精灵宝可梦 魂银",
    "精灵宝可梦 心金",
    "胧村正",
    "使命召唤：现代战争2",
    "立体绘图方块",
    "神秘海域2：纵横四海",
    "精灵宝可梦：不可思议迷宫 空之探险队",
    "植物大战僵尸",
    "符文工房3",
    "乐动魔方",
    "刺客信条2",
    "东方非想天则 ～ 追寻特大型人偶之谜",
    "New 超级马力欧兄弟 Wii",
    "真・女神转生 奇幻之旅",
    "雷顿教授与魔神之笛",
    "高达vs高达 NEXT PLUS",
    "怪物猎人携带版 3rd",
    "超级马力欧银河2",
    "幽灵诡计",
    "潜龙谍影 和平行者",
    "维多利亚2",
    "精灵宝可梦 白",
    "精灵宝可梦 黑",
    "骑马与砍杀：战团",
    "质量效应2",
    "异度神剑",
    "GT赛车5",
    "星际争霸2：自由之翼",
    "光环：致远星",
    # "图书室的Neversista", # ??
    "学园帅哥", # BL ??
    "宝可梦 showdown",
    "神学校", # BL 
    "怪物猎人3G",
    "逆转检事2",
    "英雄传说：碧之轨迹",
    "战场女武神3",
    "重装机兵2 重制版",
    "去月球",
    "大家的节奏天国",
    "最终幻想 零式",
    "死亡空间2",
    "星之卡比 重回梦幻岛",
    "超级弹丸论破2 再见了绝望学园", # ??
    "东方年代记 双姬蓬莱物语",
    "精灵宝可梦 白2",
    "十字军之王2",
    "三国志姜维传",
    "精灵宝可梦 黑2",
    "第2次超级机器人大战OG",
    "零：真红之蝶",
    "新光神话 帕尔提娜之镜",
    "风之旅人",
    "来吧！动物之森",
    "质量效应3",
    "勇气默示录 飞舞的妖精",
    "机动战士高达 EXTREME VS. FULL BOOST",
    "美妙世界 -Solo Remix-",
    "行尸走肉",
    "恐怖美术馆",
    "潜伏之赤途",
    "塞尔达传说 众神的三角力量2",
    "生化奇兵：无限",
    "怪物猎人4",
    "超级马力欧 3D世界",
    "OZ大乱斗-NS",
    "棠棣之华", # BL
    "马基埃亚尔的传说",
    "精灵宝可梦 Y",
    "木偶人",
    "精灵宝可梦 X",
    "光环2",
    "东方花映塚 ～ Phantasmagoria of Flower View.",
    "Wii 运动",
    "节拍特工",
    "生化奇兵",
    "光环3",
    "OZ大乱斗 梦想的传说",
    "时空幻境",
    "东方地灵殿 ～ Subterranean Animism.",
    "戴森球计划",
    "图灵完备",
    "审判之逝：湮灭的记忆",
    "神之天平 ～活着的证明～ Revision",
    "逸剑风云决",
    "千年战争Aigis",
    "舰队Collection",
    "桌游模拟器",
    "火线迈阿密2：空号",
    "东方绀珠传 ～ Legacy of Lunatic Kingdom.",
    "健身环大冒险",
    "节奏医生",
    "宇宙机器人"
])

async def fetchImageIfNotExists(session, imgUrl, imgName, name, cookies):
    imgPath = os.path.join("images", imgName)   
    if not not os.path.exists(imgPath):
        return
    try:
        async with session.get(imgUrl, headers={
                    "Cookie": cookies
                }) as img_response:
            if img_response.status == 200:
                with open(imgPath, "wb") as img_file:
                    img_file.write(await img_response.read())
            else:
                print(f"Failed to download image {imgUrl} for {name}")
    except aiohttp.InvalidUrlClientError:
        pass

async def fetch(cookies: str):
    result = {}
    async with aiohttp.ClientSession() as session:
        # for cookie in cookies:
        #     c = { "name": cookie.get("name", None),
        #           "value": cookie.get("value", None),
        #         #   "domain": cookie["domain"],
        #         #   "path": cookie["path"],
        #           "expirationDate": cookie.get("expirationDate", None),
        #         #   "secure": cookie.get("secure", False),
        #           "hostOnly": cookie.get("hostOnly", False),
        #         #   "httpOnly": cookie.get("httpOnly", False),
        #           "storeId": cookie.get("storeId", "0"),
        #           "id": cookie.get("id", None),
        #         #   "sameSite": cookie.get("sameSite", "Lax"),
        #           "session": cookie.get("session", False),
        #           "firstPartyDomain": cookie.get("firstPartyDomain", None),
        #           "partitionKey": cookie.get("partitionKey", None) }
        #     session.cookie_jar.update_cookies(c)
        #         # response_url=URL(f"http://{cookie['domain'][1:]}"))
        for year in years:
            entries = []
            for page in range(1, 5):
                if len(entries) >= 12:
                    break
                url = f"https://bgm.tv/game/browser/airtime/{year}?sort=rank&page={page}"
                print(url)
                async with session.get(url, headers={
                    "Cookie": cookies,
                }) as response:
                    if response.status == 200:
                        html = await response.text()
                        pq = pyquery.PyQuery(html)
                        items = pq(".item")
                        print(len(items))
                        for item in items:
                            itempy = pyquery.PyQuery(item)
                            title = itempy("h3 .l").text()

                            hasKeyword = False
                            for keyword in exludingKeywords:
                                if keyword in title:
                                    print(f"Excluding {title} due to keyword {keyword}")
                                    hasKeyword = True
                                    break
                            
                            if hasKeyword:
                                continue

                            if title in excludings:
                                continue

                            rating = 0.0
                            ratingText = itempy(".rateInfo .fade").text()
                            try:
                                rating = float(ratingText)
                            except ValueError:
                                print(f"Could not convert rating for {title} to float {ratingText}")
                                pass
                            img = itempy("img").attr("src") # type: str
                            if img.startswith("//"):
                                img = "https:" + img
                            imgName = img.split("/")[-1]

                            await fetchImageIfNotExists(session, img, imgName, title, cookies)

                            entries.append({
                                "title": title,
                                "rating": rating,
                                "img": imgName
                            })
                    else:
                        print(f"Failed to retrieve data for {year}")
            result[year] = entries
    with open("games.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=4)

async def main():
    cookies = ""
    if not os.path.exists("images"):
        os.makedirs("images")
    if os.path.exists("cookies"):
        with open("cookies", "r") as f:
            cookies = f.readline()
    
    await fetch(cookies=cookies)

if __name__ == "__main__":
    asyncio.run(main())
