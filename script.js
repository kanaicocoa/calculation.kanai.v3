document.getElementById("app").style.display = "block";

const bodyMaster = [
  { id: "dry-shirt", name: "選択してください", price: 0 },
  { id: "dry-shirt", name: "ドライシャツ", price: 280 },
  { id: "cotton-shirt", name: "コットンTシャツ", price: 415 },
  { id: "polo", name: "ドライポロ", price: 510 },
  { id: "polo", name: "ポケット付きドライポロ", price: 510 },
  { id: "polo", name: "コットン風ポロ", price: 785 },
  { id: "long-sleeve", name: "ドライロンT", price: 400 },
  { id: "long-sleeve", name: "コットンロンT", price: 560 },
  { id: "polo", name: "圧着ホッケー", price: 625 },
  { id: "polo", name: "圧着野球（ストライプなし）", price: 800 },
  { id: "polo", name: "圧着野球（ストライプあり）", price: 1010 },
  { id: "polo", name: "圧着ビブス", price: 470 },
  { id: "polo", name: "圧着バスケユニ（アスレ）", price: 680 },
  { id: "polo", name: "スウェット", price: 940 },
  { id: "polo", name: "パーカー", price: 1270 },
  { id: "polo", name: "ジップパーカー", price: 1515 },
  { id: "polo", name: "ドライVネック", price: 400 },
  { id: "polo", name: "6.2オンス プレミアム Tシャツ", price: 620 }
];

const sleeveOptions = [
  { id: "none", label: "なし", price: 0 },
  { id: "sleeve-1-normal", label: "あり", price: 200 }
];

const chestOptions = [
  { id: "none", label: "なし", price: 0 },
  { id: "chest-1-normal", label: "あり", price: 200 }
];

const bigDesignOptions = [
  { id: "none", label: "なし", price: 0 },
  { id: "big-name-number", label: "背ネーム背番号", price: 300 },
  { id: "big-4-normal", label: "④（24cm×30cm）", price: 300 },
  { id: "big-5-normal", label: "⑤（30cm×40cm）", price: 500 },
  { id: "big-name-number-lame", label: "【ラメ】背ネーム背番号④⑤", price: 500 },
  { id: "big-4-lame", label: "【ラメ】④⑤", price: 600 }
];

const faqData = [
  {
    keywords: ["昇華"],
    answer: "昇華とはタイの工場で外注している商品のことです。\nデザインの自由度がかなり高いので\nユニフォーム系のデザインによく使用されます。"
  },
  {
    keywords: ["圧着"],
    answer: "圧着とは弊社事務所でDTF印刷をする商品・作業のことを指します。\nDTFとは事務所奥の部屋の大きなプリンターで刷っている印刷物のことです。\nこれを圧着機と呼ばれる機械で熱と圧で貼り付けるためこのように呼んでいます。"
  },
  {
    keywords: ["DTF"],
    answer: "DTFとは事務所奥の部屋の大きなプリンターで刷っている印刷物のことです。\nこれで出力したものを圧着します。"
  },
  {
    keywords: ["マスト"],
    answer: "マストとはその商品をいつまでに発注していなければならいないのかの日付です。\n月ごとのアコーディオンを開いて最新画像を確認してください。"
  },
  {
    keywords: ["クレーム", "電話", "謝罪", "対応"],
    answer: "クレーム・電話対応は『電話』カテゴリのマニュアル確認がおすすめです。\nクレーム対応マニュアル.pdfも開けます。"
  },
  {
    keywords: ["新規", "初回", "最初", "初めて"],
    answer: "新規対応は『新規』カテゴリのマニュアルを確認してください。"
  },
  {
    keywords: ["電話番号", "住所"],
    answer: "電話番号：03-5347-0233\n住所：〒166-0004\n東京都杉並区阿佐谷南3-48-12"
  },
  {
    keywords: ["国内"],
    answer: "日本国内の工場へ外注する商品です。シルクスクリーンやインクジットの際に使用されます"
  },
  {
    keywords: ["Lステップ"],
    answer: "クラTスタジオ（クラスタ）のブランドへ問い合わせがあった場合に使用する返信ツールです。"
  },
  {
    keywords: ["ビブス","バスケビブス"],
    answer: "メッシュ生地でノースリーブタイプの商品です。"
  },
  {
    keywords: ["ドライ","ドライ生地"],
    answer: "速乾性が高く、伸縮性のある生地です。\nコットンに比べて安価なので積極的に勧めていきましょう。"
  },
  {
    keywords: ["後追い"],
    answer: "新規問い合わせの段階で会話がしばらく止まってしまっている方に向けて\n返信がもらえるようにこちらから質問を投げかける業務です。\nLINEの登録名などを積極的に呼んでみると効果的です。"
  },
  {
    keywords: ["フォトプリント","フォトプリ","photoprint"],
    answer: "昇華の商品に、持ち込みの画像をそのまま入れる時に使用します。\n通常の昇華とは異なるカラー表から選択していただきます。\n判断は必ずイラレ担当に聞いてください。"
  },
  {
    keywords: ["背ネーム","背番号"],
    answer: "背ネームは15文字まで設定可能。半角文字も1文字換算です。\n背番号は数字のみ使用可能で4桁まで設定可能。"
  },
  {
    keywords: ["次は何をすればいい？"],
    answer: "現状はどの段階ですか？丸付きの番号で回答してください。\n①新規問い合わせの段階\n②ご注文フォームに記入してもらった\n③デザインオーダーシートや背ネーム背番号のフォームを送った\n④デザインオーダーシートを記入してもらった\n⑤デザインデータの確認が終わり、背ネーム背番号の記入も済んでいる\n⑥最終確定直後\n⑦最終確定後、請求内容を送った\n⑧発送連絡がされている\n⑨商品が到着したと連絡をもらった"
  },
  {
    keywords: ["①"],
    answer: "新規問い合わせの段階ですね！\nご使用日、デザイン、枚数、料金、先生からの許可は聞けていますか？\n問題がなければご注文フォームを送ってもいいか聞いてみましょう。"
  },
  {
    keywords: ["②"],
    answer: "ご注文フォームをご記入してもらったら、スプシにご注文内容を移しますが、これは既存社員が行います。\nこのお客様は一旦放置で大丈夫です。"
  },
  {
    keywords: ["③"],
    answer: "デザインオーダーシートや背ネーム背番号フォームが送られているが、記入がまだならまずはデザインオーダーシートから記入をお願いしましょう。"
  },
  {
    keywords: ["④"],
    answer: "デザインオーダーシートを記入してもらったら、スプシのAi作成の欄（D列）に今日の日付を入れましょう。\nイラレ担（C列）が青になればOKです。"
  },
  {
    keywords: ["⑤"],
    answer: "V2なら→\nシステムの最終確定ボタンを押してもらいましょう。\n\nその他なら→\nテンプレートの【55.発注前の最終確認】を送りましょう。\nこれも問題なければ【56.『新』最終確定の際に送る文】をおくって、スプシの最終確定に日付を入れましょう。"
  },
  {
    keywords: ["⑥"],
    answer: "最終確定が済んだら、残るは請求（先払いのお客様を除く）と発送連絡のみです。\n発送連絡は担当者が行うので、請求の案内を送りましょう。\nメモ欄に請求書希望と記載があればこのタイミングで合わせて作成します。"
  },
  {
    keywords: ["⑦"],
    answer: "請求が終わっているなら、あとは発送連絡をするだけです。\nこれは担当者が行うのでお客様へは発送連絡までお待ちくださいと案内しましょう。"
  },
  {
    keywords: ["⑧"],
    answer: "発送連絡がされているなら、通常翌日、遠方の方は数日でお届けできます。\nお届け日のタブを確認の上、◯◯日程度で到着予定ですので到着までお待ちくださいとご案内しましょう。"
  },
  {
    keywords: ["⑨"],
    answer: "到着したという連絡が来たら、商品に不備がないか確認しましょう。\nメモ欄に納品書希望と書いてあればこのタイミングで発行しましょう。\nお支払い済みなら締めの挨拶をし、お支払いがまだなら、締めの挨拶はせず\n期限内にお支払いいただくようご案内してください。"
  },
  {
    keywords: ["リオーダー", "りおーだー"],
    answer: "すでにご注文済みのお客様による、同じデザインの再注文のことです。異なるデザインをご希望の場合はリオーダーに含まれません。"
  }
];

function getShippingCost() {
  return 3000;
}

const bodySelect = document.getElementById("bodySelect");
const quantityInput = document.getElementById("quantityInput");
const printSelects = document.querySelectorAll(".print-select");

const costPriceEl = document.getElementById("costPrice");
const salePriceEl = document.getElementById("salePrice");
const minPriceEl = document.getElementById("minPrice");

const detailBodyEl = document.getElementById("detailBody");
const detailPrintEl = document.getElementById("detailPrint");
const detailShippingEl = document.getElementById("detailShipping");
const resetBtn = document.getElementById("resetBtn");

const tabButtons = document.querySelectorAll(".tab-button");
const screens = {
  calculator: document.getElementById("screen-calculator"),
  "body-size": document.getElementById("screen-body-size"),
  mast: document.getElementById("screen-mast"),
  delivery: document.getElementById("screen-delivery"),
  manual: document.getElementById("screen-manual"),
  ai: document.getElementById("screen-ai"),
  designGuide: document.getElementById("screen-designGuide")
};

const manualSearch = document.getElementById("manualSearch");
const globalSearchResults = document.getElementById("globalSearchResults");
const manualSections = document.querySelectorAll("[data-manual-section]");
const manualItems = document.querySelectorAll(".manual-item");
const accordionCards = document.querySelectorAll("[data-accordion]");
const designSubtabs = document.querySelectorAll(".design-subtab");
const guidePanels = document.querySelectorAll(".guide-panel");

const chatInput = document.getElementById("chat-input");
const chatSendButton = document.getElementById("chat-send-button");
const chatLog = document.getElementById("chat-log");
const quickQuestions = document.querySelectorAll(".quick-question");

const palette = document.getElementById("commandPalette");
const input = document.getElementById("commandInput");
const resultsBox = document.getElementById("commandResults");

function initBodyOptions() {
  if (!bodySelect) return;
  bodySelect.innerHTML = "";
  bodyMaster.forEach((body) => {
    const option = document.createElement("option");
    option.value = body.id;
    option.textContent = body.name;
    bodySelect.appendChild(option);
  });
}

function getOptionsByType(type) {
  if (type === "sleeve") return sleeveOptions;
  if (type === "chest") return chestOptions;
  if (type === "big") return bigDesignOptions;
  return [{ id: "none", label: "なし", price: 0 }];
}

function initPrintOptions() {
  printSelects.forEach((select) => {
    const type = select.dataset.type;
    const options = getOptionsByType(type);
    select.innerHTML = "";

    options.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = item.label;
      option.dataset.price = item.price;
      select.appendChild(option);
    });

    select.value = "none";
  });
}

function getSelectedBody() {
  if (!bodySelect) return null;
  return bodyMaster[bodySelect.selectedIndex] || null;
}

function getSelectedPrintTotalPerPiece() {
  let total = 0;
  printSelects.forEach((select) => {
    const selectedOption = select.options[select.selectedIndex];
    const price = Number(selectedOption?.dataset.price || 0);
    total += price;
  });
  return total;
}

function formatNumber(value) {
  return Math.round(value).toLocaleString("ja-JP");
}

function resetPrices() {
  if (costPriceEl) costPriceEl.textContent = "¥0";
  if (salePriceEl) salePriceEl.textContent = "¥0";
  if (minPriceEl) minPriceEl.textContent = "¥0";
  if (detailBodyEl) detailBodyEl.textContent = "0円";
  if (detailPrintEl) detailPrintEl.textContent = "0円";
  if (detailShippingEl) detailShippingEl.textContent = "0円";
}

function calculatePrice() {
  const body = getSelectedBody();
  const quantity = Number(quantityInput?.value) || 0;

  if (!body || quantity <= 0) {
    resetPrices();
    return;
  }

  const bodyPrice = Number(body.price) || 0;
  const printPricePerPiece = getSelectedPrintTotalPerPiece();
  const shipping = getShippingCost();

  const costPerPiece = ((((bodyPrice + printPricePerPiece) * quantity) + shipping) * 1.1) / quantity;
  const salePrice = costPerPiece + 1000;
  const minPrice = costPerPiece + 500;

  if (costPriceEl) costPriceEl.textContent = `¥${formatNumber(costPerPiece)}`;
  if (salePriceEl) salePriceEl.textContent = `¥${formatNumber(salePrice)}`;
  if (minPriceEl) minPriceEl.textContent = `¥${formatNumber(minPrice)}`;
  if (detailBodyEl) detailBodyEl.textContent = `${formatNumber(bodyPrice)}円`;
  if (detailPrintEl) detailPrintEl.textContent = `${formatNumber(printPricePerPiece)}円`;
  if (detailShippingEl) detailShippingEl.textContent = `${formatNumber(shipping)}円`;
}

function switchTab(tabName) {
  tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === tabName);
  });

  Object.entries(screens).forEach(([name, screen]) => {
    if (screen) {
      screen.classList.toggle("is-active", name === tabName);
    }
  });

  if (manualSearch) {
    manualSearch.placeholder = "全体検索";
  }
}

function filterManual(keyword) {
  const searchText = keyword.trim().toLowerCase();

  manualSections.forEach((section) => {
    const items = section.querySelectorAll(".manual-item");
    let visibleCount = 0;

    items.forEach((item) => {
      const title = (item.dataset.title || item.textContent).toLowerCase();
      const matched = !searchText || title.includes(searchText);
      item.classList.toggle("is-hidden", !matched);
      if (matched) visibleCount += 1;
    });

    section.classList.toggle("is-hidden", visibleCount === 0);
  });
}

function clearManualFilter() {
  filterManual("");
}

function activateGuideTab(target) {
  designSubtabs.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.guide === target);
  });

  guidePanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `guide-${target}`);
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getSearchEntries() {
  const entries = [
    {
      type: "tab",
      tab: "calculator",
      label: "メインタブ",
      title: "圧着計算",
      keywords: ["圧着計算", "売価", "価格", "最低価格", "輸送コスト", "ボディ代", "印刷代", "計算"],
      preview: "ボディ代・印刷代・輸送コストから通常売価と最低価格を計算できます。"
    },
    {
      type: "tab",
      tab: "body-size",
      label: "メインタブ",
      title: "ボディサイズ",
      keywords: ["ボディサイズ", "サイズ", "寸法", "昇華", "圧着サイズ表"],
      preview: "昇華サイズ表と圧着サイズ表をまとめて確認できます。"
    },
    {
      type: "tab",
      tab: "mast",
      label: "メインタブ",
      title: "マスト",
      keywords: ["マスト", "must", "月", "予定", "今月"],
      preview: "月ごとのマスト画像をアコーディオン形式で確認できます。"
    },
    {
      type: "tab",
      tab: "delivery",
      label: "メインタブ",
      title: "お届け日",
      keywords: ["お届け日", "配送", "発送", "到着", "マップ"],
      preview: "地域別のお届け目安を地図で確認できます。"
    },
    {
      type: "tab",
      tab: "manual",
      label: "メインタブ",
      title: "マニュアル",
      keywords: ["マニュアル", "PDF", "手順", "クレーム", "新規", "圧着", "発送", "電話"],
      preview: "カテゴリごとにPDFマニュアルを探せます。"
    },
    {
      type: "tab",
      tab: "ai",
      label: "メインタブ",
      title: "単語検索",
      keywords: ["単語検索", "AI", "意味", "用語", "リオーダー", "圧着"],
      preview: "登録キーワードに一致した単語の意味を確認できます。"
    },
    {
      type: "tab",
      tab: "designGuide",
      label: "メインタブ",
      title: "デザインガイドライン",
      keywords: ["デザインガイドライン", "カラー", "背ネーム", "グリッター", "細かいデザイン"],
      preview: "持ち込みデザインの可否や案内ポイントを確認できます。"
    }
  ];

  manualItems.forEach((item) => {
    const section = item.closest("[data-manual-section]");
    const sectionTitle = section?.querySelector(".manual-heading")?.textContent?.trim() || "マニュアル";
    const title = item.dataset.title || item.textContent.trim();
    entries.push({
      type: "manual-item",
      tab: "manual",
      label: `マニュアル / ${sectionTitle}`,
      title,
      keywords: [sectionTitle, title, item.textContent.trim()],
      preview: `${sectionTitle}カテゴリの資料です。`
    });
  });

  designSubtabs.forEach((tab) => {
    const guide = tab.dataset.guide;
    const panel = document.getElementById(`guide-${guide}`);
    entries.push({
      type: "design-guide",
      tab: "designGuide",
      label: "デザインガイドライン",
      title: tab.textContent.trim(),
      keywords: [tab.textContent.trim(), panel?.textContent?.trim() || ""],
      preview: panel?.querySelector("p")?.textContent?.trim() || "",
      guide
    });
  });

  faqData.forEach((item) => {
    entries.push({
      type: "faq",
      tab: "ai",
      label: "単語検索 / FAQ",
      title: item.keywords[0],
      keywords: item.keywords,
      preview: item.answer,
      question: `${item.keywords[0]}って何？`
    });
  });

  accordionCards.forEach((card) => {
    const month = card.querySelector(".accordion-title")?.textContent?.trim();
    if (!month) return;
    entries.push({
      type: "mast-month",
      tab: "mast",
      label: "マスト",
      title: `${month}のマスト`,
      keywords: [month, `${month}のマスト`, "マスト"],
      preview: `${month}のマスト画像を開きます。`,
      month
    });
  });

  return entries;
}

function scoreSearchEntry(entry, query) {
  const values = [entry.title, entry.label, entry.preview, ...(Array.isArray(entry.keywords) ? entry.keywords : [entry.keywords])]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (!values.includes(query)) return 0;

  let score = 1;
  if ((entry.title || "").toLowerCase().includes(query)) score += 5;
  if ((entry.label || "").toLowerCase().includes(query)) score += 2;
  const keywords = Array.isArray(entry.keywords) ? entry.keywords : [entry.keywords];
  if (keywords.some((keyword) => String(keyword).toLowerCase().includes(query))) score += 3;
  return score;
}

function getSearchMatches(query) {
  return getSearchEntries()
    .map((entry) => ({ entry, score: scoreSearchEntry(entry, query) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);
}

function closeSearchResults() {
  if (!globalSearchResults) return;
  globalSearchResults.innerHTML = "";
  globalSearchResults.hidden = true;
}

function highlightElement(element) {
  if (!element) return;
  element.classList.add("search-hit");
  element.scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => {
    element.classList.remove("search-hit");
  }, 1800);
}

function openSearchResult(selected) {
  if (!selected) return;

  switchTab(selected.tab);

  if (selected.type === "design-guide" && selected.guide) {
    activateGuideTab(selected.guide);
    highlightElement(document.getElementById(`guide-${selected.guide}`));
  } else if (selected.type === "manual-item") {
    clearManualFilter();
    const targetItem = Array.from(manualItems).find((item) => (item.dataset.title || item.textContent.trim()) === selected.title);
    highlightElement(targetItem);
  } else if (selected.type === "mast-month" && selected.month) {
    const targetCard = Array.from(accordionCards).find((card) => card.querySelector(".accordion-title")?.textContent?.trim() === selected.month);
    if (targetCard && !targetCard.classList.contains("is-open")) {
      toggleAccordion(targetCard);
    }
    highlightElement(targetCard);
  } else if (selected.type === "faq") {
    if (chatInput) {
      chatInput.value = selected.question || "";
    }
    highlightElement(document.querySelector(".ai-container"));
  } else {
    highlightElement(screens[selected.tab]);
  }

  closeSearchResults();
}

function renderGlobalSearchResults(keyword) {
  if (!globalSearchResults) return;

  const query = keyword.trim().toLowerCase();
  if (!query) {
    closeSearchResults();
    return;
  }

  const matches = getSearchMatches(query);

  if (!matches.length) {
    globalSearchResults.innerHTML = `<div class="global-search-empty">一致する結果がありません</div>`;
    globalSearchResults.hidden = false;
    return;
  }

  globalSearchResults.innerHTML = matches.map(({ entry }, index) => {
    const preview = entry.preview ? escapeHtml(entry.preview).slice(0, 90) : "";
    return `
      <button type="button" class="global-search-item" data-result-index="${index}">
        <span class="global-search-label">${escapeHtml(entry.label)}</span>
        <strong class="global-search-title">${escapeHtml(entry.title)}</strong>
        ${preview ? `<span class="global-search-preview">${preview}</span>` : ""}
      </button>
    `;
  }).join("");
  globalSearchResults.hidden = false;

  globalSearchResults.querySelectorAll("[data-result-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = matches[Number(button.dataset.resultIndex)]?.entry;
      openSearchResult(selected);
    });
  });
}

function toggleAccordion(card) {
  const isOpen = card.classList.contains("is-open");
  card.classList.toggle("is-open", !isOpen);
  const arrow = card.querySelector(".accordion-arrow");
  if (arrow) arrow.textContent = !isOpen ? "⌄" : "›";
}

function appendMessage(role, text) {
  if (!chatLog) return;

  const wrapper = document.createElement("div");
  wrapper.className = role === "user" ? "user-msg" : "ai-msg";

  const label = document.createElement("div");
  label.className = "msg-label";
  label.textContent = role === "user" ? "YOU" : "AI";

  const bubble = document.createElement("div");
  bubble.className = "msg-bubble";
  bubble.textContent = text;

  wrapper.appendChild(label);
  wrapper.appendChild(bubble);
  chatLog.appendChild(wrapper);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function findBestAnswer(question) {
  const normalizedQuestion = question.trim().toLowerCase();
  let bestMatch = null;
  let bestScore = 0;

  faqData.forEach((item) => {
    const score = item.keywords.filter((keyword) =>
      normalizedQuestion.includes(keyword.toLowerCase())
    ).length;

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  });

  if (bestMatch && bestScore > 0) {
    return bestMatch.answer;
  }

  return "一致する登録回答が見つかりませんでした。\n言い方を変えて再度検索してみてください。\n登録作業をするので金井に声をかけてください";
}

function sendQuestion() {
  if (!chatInput) return;

  const question = chatInput.value.trim();
  if (!question) return;

  appendMessage("user", question);
  const answer = findBestAnswer(question);
  appendMessage("ai", answer);
  chatInput.value = "";
}

function initCommandPalette() {
  if (!palette || !input || !resultsBox) return;

  const commandIndex = [
    {
      label: "メインタブ",
      title: "圧着計算",
      keywords: ["圧着計算", "売価", "価格"],
      action: () => switchTab("calculator")
    },
    {
      label: "メインタブ",
      title: "ボディサイズ",
      keywords: ["ボディサイズ", "サイズ", "寸法"],
      action: () => switchTab("body-size")
    },
    {
      label: "メインタブ",
      title: "マスト",
      keywords: ["マスト", "must"],
      action: () => switchTab("mast")
    },
    {
      label: "メインタブ",
      title: "お届け日",
      keywords: ["お届け日", "配送", "発送"],
      action: () => switchTab("delivery")
    },
    {
      label: "メインタブ",
      title: "マニュアル",
      keywords: ["マニュアル", "pdf"],
      action: () => switchTab("manual")
    },
    {
      label: "メインタブ",
      title: "単語検索",
      keywords: ["単語検索", "ai", "用語"],
      action: () => switchTab("ai")
    },
    {
      label: "メインタブ",
      title: "デザインガイドライン",
      keywords: ["デザイン", "ガイドライン"],
      action: () => switchTab("designGuide")
    }
  ];

  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      palette.classList.toggle("hidden");
      if (!palette.classList.contains("hidden")) {
        input.focus();
      }
    }

    if (e.key === "Escape") {
      palette.classList.add("hidden");
    }
  });

  input.addEventListener("input", () => {
    const q = input.value.toLowerCase().trim();

    const hits = !q
      ? commandIndex
      : commandIndex.filter((item) =>
          item.title.toLowerCase().includes(q) ||
          item.keywords.some((keyword) => String(keyword).toLowerCase().includes(q))
        );

    resultsBox.innerHTML = hits.map((item, i) => `
      <div class="command-item" data-index="${i}">
        <div class="command-label">${item.label}</div>
        <div class="command-title">${item.title}</div>
      </div>
    `).join("");

    resultsBox.querySelectorAll(".command-item").forEach((el) => {
      el.addEventListener("click", () => {
        hits[Number(el.dataset.index)].action();
        palette.classList.add("hidden");
      });
    });
  });
}

function initImagePreview() {
  const previewCards = Array.from(document.querySelectorAll(".preview-card"));
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const modalImageName = document.getElementById("modal-image-name");
  const closeBtn = document.querySelector(".modal-close");
  const leftArrow = document.querySelector(".modal-arrow.left");
  const rightArrow = document.querySelector(".modal-arrow.right");

  if (!previewCards.length || !modal || !modalImage || !modalImageName) return;

  const images = previewCards
    .map(function (card) {
      return card.dataset.image;
    })
    .filter(function (path) {
      return !!path;
    });

  let currentIndex = 0;

  function getImageName(path) {
    if (!path) return "";
    const fileName = path.split("/").pop() || "";
    return decodeURIComponent(fileName);
  }

  function showImage(index) {
    if (!images.length) return;
    currentIndex = (index + images.length) % images.length;
    modalImage.src = images[currentIndex];
    modalImageName.textContent = getImageName(images[currentIndex]);
  }

  function closeModal() {
    modal.classList.remove("active");
    modalImage.src = "";
    modalImageName.textContent = "";
    document.body.style.overflow = "";
  }

  previewCards.forEach(function (card) {
    const imagePath = card.dataset.image;
    if (!imagePath) return;

    card.addEventListener("click", function () {
      const index = images.indexOf(imagePath);
      showImage(index);
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  if (leftArrow) {
    leftArrow.addEventListener("click", function (e) {
      e.stopPropagation();
      showImage(currentIndex - 1);
    });
  }

  if (rightArrow) {
    rightArrow.addEventListener("click", function (e) {
      e.stopPropagation();
      showImage(currentIndex + 1);
    });
  }

  document.addEventListener("keydown", function (e) {
    if (!modal.classList.contains("active")) return;

    if (e.key === "Escape") {
      closeModal();
    }

    if (e.key === "ArrowLeft") {
      showImage(currentIndex - 1);
    }

    if (e.key === "ArrowRight") {
      showImage(currentIndex + 1);
    }
  });
}

if (bodySelect) {
  bodySelect.addEventListener("change", calculatePrice);
}

if (quantityInput) {
  quantityInput.addEventListener("input", calculatePrice);
}

printSelects.forEach((select) => {
  select.addEventListener("change", calculatePrice);
});

if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    if (bodySelect) bodySelect.selectedIndex = 0;
    if (quantityInput) quantityInput.value = 0;
    printSelects.forEach((select) => {
      select.value = "none";
    });
    calculatePrice();
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switchTab(button.dataset.tab);
  });
});

document.addEventListener("click", (event) => {
  const clickedInsideSearch = event.target.closest(".search-box");
  if (!clickedInsideSearch) {
    closeSearchResults();
  }
});

if (manualSearch) {
  manualSearch.addEventListener("input", (event) => {
    renderGlobalSearchResults(event.target.value);
  });

  manualSearch.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSearchResults();
    }
  });
}

manualItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    const href = item.getAttribute("href");
    if (!href || href === "#") {
      event.preventDefault();
      alert("ここにPDFのリンクを設定すると開けます。");
    }
  });
});

accordionCards.forEach((card) => {
  const header = card.querySelector(".accordion-header");
  if (header) {
    header.addEventListener("click", () => {
      toggleAccordion(card);
    });
  }
});

if (chatSendButton) {
  chatSendButton.addEventListener("click", sendQuestion);
}

if (chatInput) {
  chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      sendQuestion();
    }
  });
}

quickQuestions.forEach((button) => {
  button.addEventListener("click", () => {
    if (chatInput) {
      chatInput.value = button.dataset.question || "";
    }
    sendQuestion();
  });
});

initBodyOptions();
initPrintOptions();

if (bodySelect) {
  bodySelect.selectedIndex = 0;
}

if (quantityInput) {
  quantityInput.value = 0;
}

calculatePrice();
switchTab("calculator");

designSubtabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activateGuideTab(tab.dataset.guide);
  });
});

initCommandPalette();
initImagePreview();
