import galData from "./data.tsx";
import { domToBlob } from "modern-screenshot";
import { toast } from "solid-sonner";
import { usePersistState } from "./hooks.ts";
// import { createMemo, createSignal } from "solid-js";

export const App = () => {
  const [selectedAnime, setSelectedAnime] = usePersistState<string[]>(
    "selectedAnime",
    []
  )

  let wrapper: HTMLDivElement | undefined = undefined

  const imageToBlob = async () => {
    console.log("wrapper", wrapper);
    if (!wrapper) return

    const blob = await domToBlob(wrapper!, {
      scale: 2,
      filter(el) {
        if (el instanceof HTMLElement && el.classList.contains("remove")) {
          return false
        }
        return true
      },
    })

    return blob
  }

  const copyImage = async () => {
    const blob = await imageToBlob()

    console.log(blob);

    if (!blob) return

    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ])
  }

  const downloadImage = async () => {
    if (!wrapper) return

    const blob = await imageToBlob()

    if (!blob) return

    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "galgame-sedai.png"
    a.click()

    URL.revokeObjectURL(url)
  }

//   const [promptType, setPromptType] = createSignal<"normal" | "zako">("zako");

//   const prompt = createMemo(() => {
//     const preset =
//       promptType() === "normal"
//         ? `以下是用户Galgame游玩记录，请生成一个锐评。`
//         : `你是一个精通二次元文化的傲娇雌小鬼，需要根据用户提供的Galgame游玩记录，用雌小鬼惯用的嘲讽语气混合galgame圈梗生成锐评报告。要求：
// 1. 结构模板
//   - 列出5-6个嘲讽段落
//   - 每个段落的所有内容请务必都包含在 ">> 标签" 开始的一行之后！！
//   - 每一个嘲讽段落的主题都应当不同，且应当尖锐
//   - 你应当大量地使用“杂鱼”、“❤”、“杂鱼~”、“杂鱼❤~”，“不会吧不会吧”等雌小鬼常用词汇
//   - 不要在输出的报告中写题目以及任何 markdown 样式，这非常，非常重要！！
// 2. 内容规则
//   - 一些常见的梗类型：
//     - 冷门番暴露癖（例："看这种没人听的冷门番，大哥哥该不会在等弹幕里出现'同类'吧？杂鱼❤"）
//     - 补番速度羞辱（例："三年才看十部？杂鱼哥哥的补番速度比柯南破案还慢呢~"）
//     - 类型单一化（例："全是异世界？大哥哥的想象力比史莱姆还黏稠呢~"）
//     - 标题长度玩梗（例："《打了300年史莱姆》这种标题...杂鱼哥哥该不会真信能活300年吧？"）
//     - 所有内容必须包含在 ">> 标签" 行之后
//   - 想一下还有哪些适合用来嘲讽的梗，但不要太多，否则会显得很杂乱
// 3. 示例:
// """
// >> 补番龟速の杂鱼❤  

// 不会吧不会吧？从2006到2024年只啃了三部动画？杂鱼哥哥的补番速度比吉良吉影的日常还慢呢❤~等你看完新番，人类都移民火星了杂鱼~杂鱼❤~  

// >> 冷门番の孤独癖❤  

// 太空丹迪和异世界舅舅？看这种没人讨论的冷门番，杂鱼哥哥该不会在弹幕里蹲“同类”吧❤~不会真以为自己是宇宙第一鉴赏家吧？杂鱼❤~   

// >> 番量贫瘠の杂鱼❤  

// 三部动画就敢自称阿宅？杂鱼哥哥的番单比史莱姆还稀薄呢❤~不会吧不会吧，该不会把补番当成就系统刷吧？杂鱼❤~杂鱼~

// >> ...

// ...

// >> ...

// ...
// """

// 现在开始分析用户的动画观看记录，按上述格式输出锐评报告。
// `

//     return `
// ${preset}
// 用户动画观看记录：(下面的年份是动画发布的年份)
// ${Object.keys(galData)
//   .map((year) => {
//     const items = galData[year] || []

//     if (items.length === 0) return ""

//     const sliceItems = items.slice(0, 12)
//     const watched = sliceItems
//       .filter((item) => selectedAnime().includes(item.title))
//       .map((item) => item.title)
//       .join(", ")
//     const unWatched = sliceItems
//       .filter((item) => !selectedAnime().includes(item.title))
//       .map((item) => item.title)
//       .join(", ")

//     return [
//       `**${year}年**:`,
//       `看过: ${watched || "无"}`,
//       `没看过: ${unWatched || "无"}`,
//     ]
//       .filter(Boolean)
//       .join("\n")
//   })
//   .filter(Boolean)
//   .join("\n")}
//     `.trim()
//   }, [selectedAnime, promptType])

  return (
    <>
      <div class="flex flex-col gap-4 pb-10">
        <div class="p-4 flex flex-col md:items-center ">
          <div
            class="flex flex-col border border-b-0 bg-white w-fit"
            ref={wrapper}
          >
            <div class="border-b justify-between p-2 text-lg  font-bold flex">
              <h1>
                我是Galgame糕手<span class="remove"> - 点击选择你玩过的Galgame</span>
                <span class="ml-2 text-zinc-400 font-medium">
                  galgame.fallenwood.net
                </span>
              </h1>
              <span class="shrink-0 whitespace-nowrap">
                我玩过 {selectedAnime().length}/
                {
                  Object.values(galData).flatMap((year) => {
                    return year.map((item) => item.title).slice(0, 12)
                  }).length
                }{" "}
                部Galgame
              </span>
            </div>
            {Object.keys(galData).map((year) => {
              const items = galData[year] || []
              return (
                <div class="flex border-b">
                  <div class="bg-red-500 shrink-0 text-white flex items-center font-bold justify-center p-1 size-16 md:size-20 border-black">
                    {year}
                  </div>
                  <div class="flex shrink-0">
                    {items.slice(0, 12).map((item) => {
                      const isSelected = selectedAnime().includes(item.title)
                      return (
                        <button
                          // key={item.title}
                          class={`size-16 md:size-20 border-l break-all text-center shrink-0 inline-flex flex-col items-center p-1 overflow-hidden justify-center cursor-pointer text-sm  ${
                            isSelected ? "bg-green-500" : "hover:bg-zinc-100"
                          }`}
                          title={item.title}
                          onClick={() => {
                            setSelectedAnime((prev) => {
                              if (isSelected) {
                                return prev.filter(
                                  (title) => title !== item.title
                                )
                              }
                              return [...prev, item.title]
                            })
                          }}
                        >
                          <span class="leading-tight w-full line-clamp-3">
                            <img src={`/images/${item.img}`} class="size-10 md:size-12 ml-auto mr-auto" />
                          </span>
                          <span class="leading-tight w-full line-clamp-3">
                            {item.title}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div class="flex gap-2 justify-center">
          <button
            type="button"
            class="border rounded-md px-4 py-2 inline-flex"
            onClick={() => {
              setSelectedAnime(
                Object.values(galData).flatMap((year) => {
                  return year.map((item) => item.title).slice(0, 12)
                })
              )
            }}
          >
            全选
          </button>

          {selectedAnime.length > 0 && (
            <button
              type="button"
              class="border rounded-md px-4 py-2 inline-flex"
              onClick={() => {
                setSelectedAnime([])
              }}
            >
              清除
            </button>
          )}

          <button
            type="button"
            class="border rounded-md px-4 py-2 inline-flex"
            onClick={() => {
              console.log("copy image");

              toast.promise(copyImage(), {
                success: "复制成功",
                loading: "复制中",
                error(error: any) {
                  return `复制失败: ${
                    error instanceof Error ? error.message : "未知错误"
                  }`
                },
              })
            }}
          >
            复制图片
          </button>

          <button
            type="button"
            class="border rounded-md px-4 py-2 inline-flex"
            onClick={() => {
              toast.promise(downloadImage(), {
                success: "下载成功",
                loading: "下载中",
                error(error: any) {
                  return `下载失败: ${
                    error instanceof Error ? error.message : "未知错误"
                  }`
                },
              })
            }}
          >
            下载图片
          </button>
        </div>

        <div class="mt-2 text-center">
          历年关注最多的Galgame和部分RPG，数据来自 bgm.tv，
          <a
            href="https://github.com/fallenwood/galgame-sedai"
            target="_blank"
            class="underline"
          >
            查看代码
          </a>
        </div>
      </div>
    </>
  )
}
