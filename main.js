$(document).ready(() => {
  const mainDiv = document.querySelector("#app");

  function head() {
    const mainHead = document.createElement("link");
    mainHead.setAttribute("rel", "stylesheet");
    mainHead.setAttribute(
      "href",
      "https://use.fontawesome.com/releases/v5.15.4/css/all.css"
    );
    mainHead.setAttribute("crossorigin", "anonymous");

    document.head.appendChild(mainHead);
  }

  function header() {
    const header = document.createElement("article");
    header.setAttribute("class", "Header");

    const mainHeader = document.createElement("h1");
    mainHeader.setAttribute("class", "main-header");
    mainHeader.innerHTML = "TYP";

    const subjectHeader = document.createElement("h2");
    subjectHeader.setAttribute("class", "subject-header");
    subjectHeader.innerHTML = "Test-Drive Your Text";

    mainDiv.appendChild(header);
    header.appendChild(mainHeader);
    header.appendChild(subjectHeader);
  }

  function body() {
    const bodyArticleOne = document.createElement("article");
    bodyArticleOne.setAttribute("class", "Body-Article__One");

    // RIGHT SECTION

    const rightSection = document.createElement("section");
    rightSection.setAttribute("class", "right-section right-section__active");
    rightSection.setAttribute("id", "right-section");

    // RIGHT SECTION LABEL

    const rightSectionLabel = document.createElement("label");
    rightSectionLabel.setAttribute = ("class", "right-section__label");
    rightSectionLabel.innerHTML = "FONT WEIGHT";

    // RIGHT SECTION LABEL SELECT

    const rightSectionLabelSelect = document.createElement("select");
    rightSectionLabelSelect.setAttribute("class", "font-weight");
    rightSectionLabelSelect.setAttribute("id", "font-weight");

    // RIGHT SECTION LABEL SELECT OPTIONS

    const rightSectionLabelSelectOptionOne = document.createElement("option");
    rightSectionLabelSelectOptionOne.setAttribute("value", "normal");
    rightSectionLabelSelectOptionOne.innerHTML = "Normal";

    const rightSectionLabelSelectOptionTwo = document.createElement("option");
    rightSectionLabelSelectOptionTwo.setAttribute("value", "bold");
    rightSectionLabelSelectOptionTwo.innerHTML = "Bold";

    const rightSectionLabelSelectOptionThree = document.createElement("option");
    rightSectionLabelSelectOptionThree.setAttribute("value", "bolder");
    rightSectionLabelSelectOptionThree.innerHTML = "Bolder";

    const rightSectionLabelSelectOptionFour = document.createElement("option");
    rightSectionLabelSelectOptionFour.setAttribute("value", "lighter");
    rightSectionLabelSelectOptionFour.innerHTML = "Lighter";

    // MIDDLE SECTION

    const middleSection = document.createElement("section");
    middleSection.setAttribute("class", "middle-section");
    middleSection.setAttribute("id", "middle-section");

    // MIDDLE SECTION LABEL

    const middleSectionLabel = document.createElement("label");
    middleSectionLabel.setAttribute = ("class", "mleft-section__label");
    middleSectionLabel.innerHTML = "FONT SIZE";

    // MIDDLE SECTION LABEL TEXT AREA

    const middleSectionLabelInput = document.createElement("input");
    middleSectionLabelInput.setAttribute(
      "class",
      "middle-section-label__input middle-section__active"
    );
    middleSectionLabelInput.setAttribute("type", "text");
    middleSectionLabelInput.setAttribute("name", "font-size");
    middleSectionLabelInput.setAttribute("id", "font-size");
    middleSectionLabelInput.setAttribute("placeholder", "12");
    middleSectionLabelInput.setAttribute("autocomplete", "on");
    middleSectionLabelInput.setAttribute("cols", "1");
    middleSectionLabelInput.setAttribute("rows", "1");

    // LEFT SECTION

    const leftSection = document.createElement("section");
    leftSection.setAttribute("class", "left-section left-section__active");
    leftSection.setAttribute("id", "left-section");

    // LEFT SECTION LABEL

    const leftSectionLabel = document.createElement("label");
    leftSectionLabel.setAttribute = ("class", "left-section__label");
    leftSectionLabel.setAttribute = ("id", "left-section__label");
    leftSectionLabel.innerHTML = "FONT FAMILY";

    // LEFT SECTION LABEL SELECT

    const leftSectionLabelSelect = document.createElement("select");
    leftSectionLabelSelect.setAttribute("class", "font-family");
    leftSectionLabelSelect.setAttribute("name", "font-family");
    leftSectionLabelSelect.setAttribute("id", "font-family");

    // LEFT SECTION LABEL SELECT OPTIONS

    const leftSectionLabelSelectOptions = [{}];

    const leftSectionLabelSelectoptionOne = document.createElement("option");
    leftSectionLabelSelectoptionOne.setAttribute("value", "helvetica");
    leftSectionLabelSelectoptionOne.setAttribute("id", "helvetica");
    leftSectionLabelSelectoptionOne.innerHTML = "Helvetica";

    const leftSectionLabelSelectoptionTwo = document.createElement("option");
    leftSectionLabelSelectoptionTwo.setAttribute("value", "times");
    leftSectionLabelSelectoptionTwo.setAttribute("id", "times");
    leftSectionLabelSelectoptionTwo.innerHTML = "Times";

    const leftSectionLabelSelectoptionThree = document.createElement("option");
    leftSectionLabelSelectoptionThree.setAttribute("value", "imapct");
    leftSectionLabelSelectoptionThree.setAttribute("id", "imapct");
    leftSectionLabelSelectoptionThree.innerHTML = "Impact";

    const leftSectionLabelSelectoptionFour = document.createElement("option");
    leftSectionLabelSelectoptionFour.setAttribute("value", "courier");
    leftSectionLabelSelectoptionFour.setAttribute("id", "courier");
    leftSectionLabelSelectoptionFour.innerHTML = "Courier";

    const leftSectionLabelSelectoptionFive = document.createElement("option");
    leftSectionLabelSelectoptionFive.setAttribute("value", "verdana");
    leftSectionLabelSelectoptionFive.setAttribute("id", "verdana");
    leftSectionLabelSelectoptionFive.innerHTML = "Verdana";

    // ARTICLE TWO

    const bodyArticleTwo = document.createElement("article");
    bodyArticleTwo.setAttribute("class", "Body-Article__Two");

    // ARTICLE TWO SECTION ONE

    const bodyArticleTwoSectionOne = document.createElement("section");
    bodyArticleTwoSectionOne.setAttribute(
      "class",
      "body-article-two-setion__one"
    );

    const bodyArticleTwoSectionOneSecOne = document.createElement("section");
    bodyArticleTwoSectionOneSecOne.setAttribute(
      "class",
      "body-article-two-section-one-sec__one body-article-two-section-one-sec__one__active"
    );

    // ARTICLE TWO SECTION ONE PARAGRAPH

    const bodyArticleTwoSectionOneParagraphOne = document.createElement("p");
    bodyArticleTwoSectionOneParagraphOne.setAttribute(
      "class",
      "body-article-two-section-one-paragraph__one preview"
    );
    bodyArticleTwoSectionOneParagraphOne.innerHTML = "Sample Font";

    // ARTICLE TWO SECTION ONE TEXTAREA

    const bodyArticleTwoSectionOneTextareaOne =
      document.createElement("textarea");
    bodyArticleTwoSectionOneTextareaOne.setAttribute(
      "class",
      "body-article-two-section-one-textarea__one body-article-two-section-one-textarea__one__active"
    );
    bodyArticleTwoSectionOneTextareaOne.setAttribute("id", "text");
    bodyArticleTwoSectionOneTextareaOne.setAttribute("name", "text");
    bodyArticleTwoSectionOneTextareaOne.setAttribute(
      "placeholder",
      "Type something here and see what happens..."
    );
    bodyArticleTwoSectionOneTextareaOne.setAttribute("cols", "30");
    bodyArticleTwoSectionOneTextareaOne.setAttribute("rows", "10");

    // JQUERY LINK

    const jQueryLink = document.createElement("link");
    jQueryLink.setAttribute(
      "src",
      "https://code.jquery.com/jquery-3.7.0.min.js"
    );
    jQueryLink.setAttribute(
      "integrity",
      "sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g="
    );
    jQueryLink.setAttribute("crossorigin", "anonymous");

    mainDiv.appendChild(bodyArticleOne);
    bodyArticleOne.appendChild(rightSection);
    bodyArticleOne.appendChild(middleSection);
    bodyArticleOne.appendChild(leftSection);

    // RIGHT SECTION

    rightSection.appendChild(rightSectionLabel);
    rightSection.appendChild(rightSectionLabelSelect);

    rightSectionLabelSelect.appendChild(rightSectionLabelSelectOptionOne);
    rightSectionLabelSelect.appendChild(rightSectionLabelSelectOptionTwo);
    rightSectionLabelSelect.appendChild(rightSectionLabelSelectOptionThree);
    rightSectionLabelSelect.appendChild(rightSectionLabelSelectOptionFour);

    // MIDDLE SECTION

    middleSection.appendChild(middleSectionLabel);
    middleSection.appendChild(middleSectionLabelInput);

    // LEFT SECTION

    leftSection.appendChild(leftSectionLabel);
    leftSection.appendChild(leftSectionLabelSelect);

    leftSectionLabelSelect.appendChild(leftSectionLabelSelectoptionOne);
    leftSectionLabelSelect.appendChild(leftSectionLabelSelectoptionTwo);
    leftSectionLabelSelect.appendChild(leftSectionLabelSelectoptionThree);
    leftSectionLabelSelect.appendChild(leftSectionLabelSelectoptionFour);
    leftSectionLabelSelect.appendChild(leftSectionLabelSelectoptionFive);

    // ARTICLE TWO

    mainDiv.appendChild(bodyArticleTwo);

    bodyArticleTwo.appendChild(bodyArticleTwoSectionOne);

    bodyArticleTwoSectionOne.appendChild(bodyArticleTwoSectionOneSecOne);
    bodyArticleTwoSectionOneSecOne.appendChild(
      bodyArticleTwoSectionOneParagraphOne
    );
    bodyArticleTwoSectionOne.appendChild(bodyArticleTwoSectionOneTextareaOne);

    mainDiv.appendChild(jQueryLink);
  }

  // document.body.appendChild(mainDiv);

  function footer() {
    const mainFooter = document.createElement("footer");
    mainFooter.setAttribute("class", "Footer");
    mainFooter.setAttribute("id", "footer");

    const mainFooterArticleOne = document.createElement("article");
    mainFooterArticleOne.setAttribute("class", "main-footer-article__one");

    const mainFooterArticleOneSectionOne = document.createElement("section");
    mainFooterArticleOneSectionOne.setAttribute(
      "class",
      "main-footer-article-one-section__one"
    );

    const mainFooterArticleOneSectionOneUL = document.createElement("ul");
    mainFooterArticleOneSectionOneUL.setAttribute(
      "class",
      "main-footer-article-one-section-one__UL"
    );

    const socialMediaLinks = [
      {
        link: "https://www.facebook.com/ernest.morse.56/",
        icon: "fab fa-facebook-square",
      },
      {
        link: "https://github.com/enmorse",
        icon: "fab fa-github-square",
      },
      {
        link: "https://twitter.com/49Ernest49",
        icon: "fab fa-twitter-square",
      },
      {
        link: "https://www.youtube.com/channel/UChcXZ0ejEGPrOKfWS-gqsTQ",
        icon: "fab fa-youtube-square",
      },
      {
        link: "https://www.linkedin.com/in/ernest-norman-morse-a619b7a0/",
        icon: "fab fa-linkedin",
      },
      {
        link: "mailto:enmorse49@gmail.com",
        icon: "fa fa-envelope-square",
      },
      {
        link: "https://www.instagram.com/ernestnmorse/",
        icon: "fab fa-instagram-square",
      },
    ];

    socialMediaLinks.map(({ link, icon }) => {
      const mainFooterArticleOneSectionOneULLIOne =
        document.createElement("li");
      mainFooterArticleOneSectionOneULLIOne.setAttribute(
        "class",
        "social-media-list__item"
      );
      const mainFooterArticleOneSectionOneULLIOneAnchorOne =
        document.createElement("a");
      mainFooterArticleOneSectionOneULLIOneAnchorOne.setAttribute(
        "class",
        "main-footer-article-one-section-one-ul-lione__anchorone social-media-list-item__anchorone"
      );
      mainFooterArticleOneSectionOneULLIOneAnchorOne.setAttribute(
        "target",
        "_blank"
      );
      mainFooterArticleOneSectionOneULLIOneAnchorOne.setAttribute("href", link);

      const mainFooterArticleOneSectionOneULLIOneAnchorOneIOne =
        document.createElement("i");
      mainFooterArticleOneSectionOneULLIOneAnchorOneIOne.setAttribute(
        "class",
        icon
      );
      mainFooterArticleOneSectionOneULLIOneAnchorOneIOne.setAttribute(
        "id",
        "social-media-list-item__icon"
      );

      mainFooterArticleOneSectionOneUL.appendChild(
        mainFooterArticleOneSectionOneULLIOne
      );
      mainFooterArticleOneSectionOneULLIOne.appendChild(
        mainFooterArticleOneSectionOneULLIOneAnchorOne
      );
      mainFooterArticleOneSectionOneULLIOneAnchorOne.appendChild(
        mainFooterArticleOneSectionOneULLIOneAnchorOneIOne
      );
    });

    mainFooter.appendChild(mainFooterArticleOne);
    mainFooterArticleOne.appendChild(mainFooterArticleOneSectionOne);
    mainFooterArticleOneSectionOne.appendChild(
      mainFooterArticleOneSectionOneUL
    );

    mainDiv.appendChild(mainFooter);
  }

  document.body.appendChild(mainDiv);

  head();
  header();
  body();
  footer();

  let $preview = $(".preview");

  function sampleFont() {
    let $text = $("#text");
    $text.on("keyup", (event) => {
      $preview.html($(event.currentTarget).val());
    });
  }

  sampleFont();

  function targetFontFamily() {
    const $targetFontFamily = $("#left-section");
    $targetFontFamily.removeClass("left-section__active");
    $targetFontFamily
      .on("mouseenter", () => {
        $targetFontFamily.addClass("left-section__active");
      })
      .on("mouseleave", () => {
        $targetFontFamily.removeClass("left-section__active");
      });
  }

  targetFontFamily();

  function changeFontFamily() {
    let $fontFamily = $("#font-family");
    $fontFamily.on("change", (event) => {
      $preview.css("font-family", $(event.currentTarget).val());
    });
  }

  changeFontFamily();

  function targetFontWeight() {
    let $targetFontWeight = $("#right-section");
    $targetFontWeight.removeClass("right-section__active");

    $targetFontWeight
      .on("mouseenter", () => {
        $targetFontWeight.addClass("right-section__active");
      })
      .on("mouseleave", () => {
        $targetFontWeight.removeClass("right-section__active");
      });
  }

  targetFontWeight();

  function changeFontWeight() {
    let $fontWeight = $("#font-weight");
    $fontWeight.on("change", (event) => {
      $preview.css("font-weight", $(event.currentTarget).val());
    });
  }

  changeFontWeight();

  function targetChangeFontSize() {
    let $targetChangeFontSize = $("#middle-section");
    $targetChangeFontSize.removeClass("middle-section__active");

    $targetChangeFontSize
      .on("mouseenter", () => {
        $targetChangeFontSize.addClass("middle-section__active");
        // alert("Font Size");
      })
      .on("mouseleave", () => {
        $targetChangeFontSize.removeClass("middle-section__active");
      });
  }

  targetChangeFontSize();

  function changeFontSize() {
    let $fontSize = $("#font-size");
    $fontSize.on("keyup", (event) => {
      let $fontSizeOne = $(event.currentTarget).val() + "px";
      $preview.css("font-size", $fontSizeOne);
    });
  }

  changeFontSize();

  function targetArticleTwoSectionOne() {
    let $targetArticleTwoSectionOne = $(
      ".body-article-two-section-one-sec__one"
    );
    $targetArticleTwoSectionOne.removeClass(
      "body-article-two-section-one-sec__one__active"
    );

    $targetArticleTwoSectionOne
      .on("mouseenter", () => {
        $targetArticleTwoSectionOne.addClass(
          "body-article-two-section-one-sec__one__active"
        );
      })
      .on("mouseleave", () => {
        $targetArticleTwoSectionOne.removeClass(
          "body-article-two-section-one-sec__one__active"
        );
      });
  }

  targetArticleTwoSectionOne();

  function targetArticleTwoSectionOneTextArea() {
    let $targetArticleTwoSectionOneTextArea = $(
      ".body-article-two-section-one-textarea__one"
    );
    $targetArticleTwoSectionOneTextArea.removeClass(
      "body-article-two-section-one-textarea__one__active"
    );

    $targetArticleTwoSectionOneTextArea
      .on("mouseenter", () => {
        $targetArticleTwoSectionOneTextArea.addClass(
          "body-article-two-section-one-textarea__one__active"
        );
      })
      .on("mouseleave", () => {
        $targetArticleTwoSectionOneTextArea.removeClass(
          "body-article-two-section-one-textarea__one__active"
        );
      });
  }

  targetArticleTwoSectionOneTextArea();

  function targetFooterArticleOneSectionOne() {
    let $mainFooterArticleOneSectionOneULOneLIOneAnchorOne = $(
      ".main-footer-article-one-section-one-ul-lione__anchorone"
    );
    $mainFooterArticleOneSectionOneULOneLIOneAnchorOne.removeClass(
      "social-media-list-item__anchorone"
    );

    $mainFooterArticleOneSectionOneULOneLIOneAnchorOne
      .on("mouseenter", (event) => {
        $(event.currentTarget).addClass("social-media-list-item__anchorone");
      })
      .on("mouseleave", (event) => {
        $(event.currentTarget).removeClass("social-media-list-item__anchorone");
      });
  }

  targetFooterArticleOneSectionOne();
});
