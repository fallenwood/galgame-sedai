import asyncio
import aiohttp
import pyquery
import json
import os

from yarl import URL

years = range(2004, 2025)
# years = range(2004, 2005)

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
    "女神异闻录：夜幕魅影"
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
            for page in range(1, 3):
                if len(entries) >= 12:
                    break
                url = f"https://bgm.tv/game/browser/airtime/{year}?sort=trends&page={page}"
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
