# 個人作品集網站

這是一個使用 **React 19**、**Vite 7** 與 **Tailwind CSS 4** 打造的單頁式個人網站。版面涵蓋履歷重點（自我介紹、技能、經歷、專案與聯絡資訊），並透過 IntersectionObserver 讓導覽列自動感知滾動位置、提供流暢的視覺效果。

## 特色
- **響應式設計**：針對桌面與行動裝置調整佈局，經歷區在桌面端左右交錯排版，手機端則直向堆疊。
- **動態導覽**：黏性導覽列會根據捲動位置高亮目前區塊，提升瀏覽體驗。
- **資料驅動的專案/經歷**：`src/data` 下的 JSON 即可管理專案與經歷內容，不需修改元件邏輯。
- **Tailwind 4 樣式**：卡片、技能標籤、時間軸等皆採客製化藍色系風格，滑過時帶有陰影與位移效果。
- **易於擴充**：所有段落以元件與資料檔分離，方便未來加入新區塊或調整內容。

## 快速開始

```bash
# 1. 安裝依賴
npm install

# 2. 本地開發
npm run dev

# 3. Lint 檢查
npm run lint

# 4. 打包靜態檔案
npm run build

# 5. 本地預覽產出
npm run preview
```

建議使用 Node.js 18 以上版本，以確保 Vite 與 Tailwind 4 正常運作。

## 專案結構

```
my_website/
├─ public/                # 靜態資源
├─ src/
│  ├─ components/         # 主要頁面元件 (Hero、Skills、Experience…)
│  ├─ data/               # 專案與經歷等 JSON 資料
│  ├─ App.jsx             # 單頁入口，控制區域排序與導覽狀態
│  └─ index.css           # 全域樣式 (含 Tailwind 基礎設定)
├─ tailwind.config.js
├─ vite.config.js
└─ package.json
```

## 自訂指南

| 區塊 | 自訂方式 |
| ---- | -------- |
| Hero/關於我 | 直接編輯 `src/components/Hero.jsx`、`About.jsx` 文字。 |
| 技能 | 更新 `src/components/Skills.jsx` 中的 `groups` 陣列，可新增 icon、標籤內容。 |
| 工作經歷 | 修改 `src/data/experiences.json`；新增項目會自動依開始時間排序並在桌面交錯顯示。 |
| 專案 | 調整 `src/data/projects.json`，支援標籤、連結與描述。 |
| 聯絡資訊 | 編輯 `src/components/Contact.jsx`。 |

### 顯示 Blog 區塊
目前 `BlogPreview` 元件在 `src/App.jsx` 中被移除，如需重新啟用，只要：
1. 在 `App.jsx` 重新匯入 `BlogPreview`；
2. 在 `<main>` 中插入 `<BlogPreview />`；
3. 視需要於 `Header.jsx` 的導覽清單加回 `Blog`。


## 待辦 & 延伸想法
- 加入更多作品或部落格文章來源（可串接 Markdown / CMS）。
- 將聯絡區塊改為可提交的表單，使用 Formspree 或自建 API。
- 將導覽的捲動動畫換成平滑滾動（可用 `scroll-behavior: smooth` 或 `react-scroll`）。

歡迎針對此網站持續調整版面或往其他風格延伸，祝開發順利！
