/* Hướng dẫn đọc hiểu, ví dụ tự biên soạn và câu tự kiểm tra theo từng mục. */
window.POLYMER_GUIDES = {
  basics: {
    goals: [
      "Phân biệt monomer, mắt xích và cả phân tử polymer.",
      "Đọc được nhóm thế, dấu ngoặc và chỉ số n.",
      "Phân loại nguồn gốc và nhận ra ba dạng mạch.",
    ],
    terms: [
      ["Monomer", "Phân tử nhỏ ban đầu tham gia phản ứng tạo polymer."],
      ["Mắt xích", "Đoạn cấu trúc lặp lại trong mạch sản phẩm."],
      [
        "Hệ số polymer hóa n",
        "Số mắt xích trong một mạch; với mẫu có nhiều độ dài mạch, dùng giá trị trung bình.",
      ],
    ],
    parts: [
      {
        explain: [
          "Hãy hình dung các hạt giống nhau nối thành vòng dây. Hạt trước khi nối giống monomer; đoạn lặp sau khi nối giống mắt xích. Phép ví von chỉ giúp nhìn cấu trúc.",
          "Trong ethylene, hai C nối đôi. Khi trùng hợp tạo PE, liên kết giữa hai C trở thành liên kết đơn và các đơn vị nối tiếp nhau thành mạch.",
          "Vì vậy, CH₂=CH₂ và –CH₂–CH₂– có cùng thành phần C₂H₄ nhưng khác cách liên kết. Đừng dùng hai công thức thay cho nhau.",
        ],
        worked: {
          prompt:
            "Từ công thức [–CH₂–CH(Cl)–]ₙ, xác định mắt xích và monomer của PVC.",
          steps: [
            "Bỏ ngoặc và chỉ số n để lấy đúng một đoạn lặp: –CH₂–CH(Cl)–.",
            "Hai C ở mạch chính tương ứng với hai C của nối đôi trong monomer.",
            "Khôi phục C=C, giữ Cl tại C ban đầu: CH₂=CH–Cl, gọi là vinyl chloride.",
          ],
        },
        mistake:
          "Một mắt xích không phải cả phân tử polymer. Dấu n áp dụng cho toàn bộ phần trong ngoặc.",
        checkpoint: {
          question: "Đâu là monomer tạo PE?",
          choices: ["CH₂=CH₂", "–CH₂–CH₂–", "[–CH₂–CH₂–]ₙ"],
          answer: 0,
          why: "CH₂=CH₂ là phân tử ethylene ban đầu. Hai cách viết còn lại lần lượt là mắt xích và công thức polymer.",
        },
      },
      {
        explain: [
          "Xác định một mắt xích trước. Tính M₀ bằng tổng khối lượng các nguyên tử có trong đoạn lặp đó.",
          "Một mạch gồm n mắt xích nên M ≈ nM₀; suy ra n ≈ M/M₀. Dấu xấp xỉ nhắc rằng đang bỏ qua nhóm ở hai đầu mạch.",
          "Nếu đề cho phân tử khối trung bình, thương M/M₀ là số mắt xích trung bình. Chỉ làm tròn theo yêu cầu cuối cùng của đề.",
        ],
        worked: {
          prompt: "PVC có phân tử khối trung bình 35 000 amu. Tính n.",
          steps: [
            "Mắt xích –CH₂–CH(Cl)– có công thức C₂H₃Cl.",
            "M₀ = 2×12 + 3×1 + 35,5 = 62,5 amu.",
            "n = 35 000/62,5 = 560. Đây là số mắt xích, không có đơn vị gam.",
          ],
        },
        mistake:
          "Không lấy M của một nguyên tử Cl để chia. Phải lấy M₀ của toàn bộ C₂H₃Cl.",
        checkpoint: {
          question: "PE có M = 28 000 amu, M₀ = 28 amu. n bằng bao nhiêu?",
          choices: ["100", "1 000", "28 000"],
          answer: 1,
          why: "n = 28 000/28 = 1 000 mắt xích.",
        },
      },
      {
        explain: [
          "Khoanh hai C của nhóm CH₂=CH– trước. Sau phản ứng, hai C đó nằm trên mạch chính.",
          "Phần R gắn bên cạnh được giữ lại trong phản ứng trùng hợp vinyl đang xét. R là CH₃ → PP; Cl → PVC; C₆H₅ → PS; CN → PAN.",
          "Với CH₂=C(CH₃)–COOCH₃ tạo PMMA, C thứ hai mang cả CH₃ và COOCH₃. Cần giữ cả hai nhóm này.",
        ],
        worked: {
          prompt: "Viết mắt xích từ monomer acrylonitrile CH₂=CH–CN.",
          steps: [
            "Nhận diện hai C của nối đôi CH₂=CH–.",
            "Đổi C=C thành C–C và mở các liên kết nối với mắt xích kế tiếp.",
            "Giữ CN trên C thứ hai, được [–CH₂–CH(CN)–]ₙ, gọi là polyacrylonitrile (PAN).",
          ],
        },
        mistake:
          "CN là nhóm thế của PAN, không được đưa N vào mạch chính như khi viết polyamide.",
        checkpoint: {
          question: "Nhóm thế đặc trưng giúp nhận ra PS là gì?",
          choices: ["Cl", "CN", "C₆H₅"],
          answer: 2,
          why: "PS được tạo từ styrene CH₂=CH–C₆H₅ nên nhóm phenyl C₆H₅ còn nằm bên cạnh mạch.",
        },
      },
      {
        explain: [
          "Nguồn gốc trả lời câu hỏi polymer đến từ đâu: thiên nhiên, tổng hợp, hoặc chế biến từ polymer thiên nhiên theo nhóm bán tổng hợp ở phổ thông.",
          "Dạng mạch trả lời câu hỏi các đoạn cấu trúc nối với nhau thế nào: không phân nhánh, phân nhánh, hay mạng không gian.",
          "Đây là hai cách phân loại khác nhau. Một chất có nguồn gốc thiên nhiên vẫn có thể có mạch phân nhánh, như amylopectin.",
        ],
        worked: {
          prompt:
            "Phân loại cellulose, amylopectin và cao su lưu hóa theo cấu trúc mạch.",
          steps: [
            "Cellulose có mạch không phân nhánh trong mô hình cấu tạo được học.",
            "Amylopectin có các nhánh nối với mạch chính.",
            "Cao su lưu hóa có cầu sulfur nối các mạch thành mạng. Đặc điểm mạng nói về cấu trúc sau lưu hóa.",
          ],
        },
        mistake:
          "Không suy ra “do con người chế biến” thì luôn là polymer tổng hợp. Visco được xếp tơ bán tổng hợp vì xuất phát từ cellulose.",
        checkpoint: {
          question: "Amylopectin được mô tả đúng bằng cặp nào?",
          choices: [
            "Thiên nhiên, phân nhánh",
            "Tổng hợp, không phân nhánh",
            "Thiên nhiên, mạng sulfur",
          ],
          answer: 0,
          why: "Amylopectin là thành phần của tinh bột và có cấu trúc phân nhánh.",
        },
      },
    ],
  },
  synthesis: {
    goals: [
      "Chọn trùng hợp hay trùng ngưng từ monomer cụ thể.",
      "Viết được mắt xích vinyl, polyamide và polyester.",
      "Giải thích được hai con đường tạo capron và nguyên liệu của buna-S, buna-N.",
    ],
    terms: [
      [
        "Trùng hợp",
        "Kết hợp nhiều monomer thành polymer, không tách phân tử nhỏ trong mô hình phản ứng của chương.",
      ],
      [
        "Trùng ngưng",
        "Kết hợp monomer có các nhóm chức phù hợp, đồng thời tách phân tử nhỏ.",
      ],
      ["Đồng trùng hợp", "Trùng hợp từ ít nhất hai loại monomer."],
    ],
    parts: [
      {
        explain: [
          "Nhìn monomer để tìm nối đôi hoặc vòng có thể mở. Với monomer vinyl, liên kết π của C=C tham gia tạo các liên kết nối dài mạch.",
          "Trong trùng hợp tạo PE, tổng số nguyên tử của các monomer được giữ trong polymer, nên không có nước bị tách ra.",
          "Đồng trùng hợp vẫn thuộc trùng hợp. Điểm khác là dùng nhiều loại monomer để tạo mạch có các loại đơn vị cấu trúc tương ứng.",
        ],
        worked: {
          prompt: "Phân biệt nguyên liệu tạo buna-S và buna-N.",
          steps: [
            "Cả hai cùng có buta-1,3-diene CH₂=CH–CH=CH₂.",
            "Buna-S dùng thêm styrene CH₂=CH–C₆H₅.",
            "Buna-N dùng thêm acrylonitrile CH₂=CH–CN. Cả hai là sản phẩm đồng trùng hợp.",
          ],
        },
        mistake:
          "S trong buna-S gợi styrene. Sulfur là chất dùng ở bước lưu hóa, không phải monomer thay cho styrene.",
        checkpoint: {
          question: "Butadiene đồng trùng hợp với acrylonitrile tạo chất nào?",
          choices: ["Buna-S", "Buna-N", "Nylon-6,6"],
          answer: 1,
          why: "Nhóm nitrile –CN trong acrylonitrile gắn với chữ N của buna-N.",
        },
      },
      {
        explain: [
          "Để nối được thành mạch dài bằng trùng ngưng, monomer cần có ít nhất hai nhóm chức có khả năng phản ứng theo phạm vi bài học.",
          "NH₂ kết hợp với COOH tạo đoạn –NH–CO– và tách H₂O. OH kết hợp với COOH tạo đoạn ester –O–CO– và tách H₂O.",
          "Hai nhóm chức có thể nằm trên cùng một monomer hoặc trên hai loại monomer bổ sung cho nhau.",
        ],
        worked: {
          prompt:
            "Vì sao hexamethylenediamine và adipic acid tạo được nylon-6,6?",
          steps: [
            "Diamine H₂N–(CH₂)₆–NH₂ có hai NH₂; diacid HOOC–(CH₂)₄–COOH có hai COOH.",
            "Các đầu NH₂ và COOH nối tiếp nhau thành liên kết amide.",
            "Mắt xích là –NH–(CH₂)₆–NH–CO–(CH₂)₄–CO–. Sơ đồ theo mắt xích thường ghi tách 2nH₂O khi bỏ qua nhóm cuối.",
          ],
        },
        mistake:
          "Một phân tử chỉ có một COOH và không có nhóm chức thích hợp thứ hai không đủ để tự nối thành mạch dài theo mô hình này.",
        checkpoint: {
          question: "Cặp nhóm chức nào tạo liên kết amide?",
          choices: ["NH₂ và COOH", "CH₃ và CH₃", "Cl và F"],
          answer: 0,
          why: "NH₂ và COOH phản ứng tạo –NH–CO–, đồng thời tách nước.",
        },
      },
      {
        explain: [
          "Capron, còn gọi nylon-6, có mắt xích –NH–(CH₂)₅–CO–. Cấu trúc sản phẩm này có thể đạt được từ hai monomer khác nhau.",
          "Nếu xuất phát từ H₂N–(CH₂)₅–COOH, NH₂ và COOH nối nhau, tách nước: trùng ngưng.",
          "Nếu xuất phát từ ε-caprolactam dạng vòng, vòng mở để nối mạch: trùng hợp mở vòng. Cần đọc monomer đề đã cho trước khi gọi tên phản ứng.",
        ],
        worked: {
          prompt:
            "Câu hỏi “capron có thể điều chế bằng trùng hợp không?” phải trả lời thế nào?",
          steps: [
            "Từ khóa “có thể” yêu cầu xét một con đường hợp lệ, không giới hạn ở amino acid.",
            "ε-Caprolactam trùng hợp mở vòng tạo capron.",
            "Vì vậy trả lời có. Nếu đề chỉ cho amino acid H₂N–(CH₂)₅–COOH thì con đường đó là trùng ngưng.",
          ],
        },
        mistake:
          "Có liên kết amide trong sản phẩm chưa đủ để kết luận mọi cách tạo polymer đó đều là trùng ngưng.",
        checkpoint: {
          question: "ε-Caprolactam tạo capron bằng cách nào?",
          choices: ["Trùng ngưng tách CO₂", "Trùng hợp mở vòng", "Lưu hóa"],
          answer: 1,
          why: "Vòng caprolactam mở và nối các đơn vị thành mạch polyamide, theo con đường trùng hợp mở vòng.",
        },
      },
      {
        explain: [
          "Bước 1: xác định nguyên tử nào nằm trên mạch chính và nhóm nào là nhóm thế.",
          "Bước 2: viết một mắt xích, để liên kết đi xuyên qua hai dấu ngoặc rồi đặt chỉ số n bên ngoài.",
          "Bước 3: kiểm tra số nguyên tử và sản phẩm phụ. Trùng hợp vinyl giữ nhóm thế; trùng ngưng cần kiểm tra phần H và OH tách thành nước.",
        ],
        worked: {
          prompt: "Viết sơ đồ trùng hợp methyl cyanoacrylate trong keo 502.",
          steps: [
            "Monomer là CH₂=C(CN)–COOCH₃, có hai nhóm thế trên C thứ hai.",
            "Mở C=C, giữ nguyên CN và COOCH₃.",
            "n CH₂=C(CN)–COOCH₃ → [–CH₂–C(CN)(COOCH₃)–]ₙ. Sơ đồ này không tạo H₂O.",
          ],
        },
        mistake:
          "Số nước trong một mạch hữu hạn phụ thuộc số mối nối. Kí hiệu nH₂O, 2nH₂O là cách viết sơ đồ mắt xích khi bỏ qua nhóm cuối.",
        checkpoint: {
          question: "Khi trùng hợp CH₂=C(CH₃)–COOCH₃, nhóm nào được giữ lại?",
          choices: ["Chỉ CH₃", "Chỉ COOCH₃", "Cả CH₃ và COOCH₃"],
          answer: 2,
          why: "Cả hai nhóm đều là nhóm thế trên C của nối đôi trong monomer PMMA.",
        },
      },
    ],
  },
  properties: {
    goals: [
      "Liên hệ cấu trúc mạch với cách gia công.",
      "Phân biệt cắt mạch, giữ nguyên mạch và tăng mạch.",
      "Giải thích được vì sao lưu hóa tạo mạng cao su.",
    ],
    terms: [
      [
        "Mạch chính",
        "Chuỗi nguyên tử liên tục cần theo dõi khi phân loại phản ứng.",
      ],
      ["Liên kết ngang", "Cầu nối giữa các mạch polymer."],
      [
        "Nhiệt rắn",
        "Vật liệu đã đóng rắn thành mạng, không gia công lại đơn giản bằng cách nấu chảy.",
      ],
    ],
    parts: [
      {
        explain: [
          "Các phân tử polymer rất lớn nên tính chất khác phân tử nhỏ. Hầu hết là chất rắn, không bay hơi và thường không có nhiệt độ nóng chảy xác định như chất tinh khiết phân tử nhỏ.",
          "Polymer nhiệt dẻo có thể mềm hoặc chảy khi gia nhiệt trong điều kiện phù hợp, sau đó tạo hình và làm nguội.",
          "Vật liệu nhiệt rắn sau đóng rắn có mạng liên kết. Khi gia nhiệt mạnh, mạng có thể phân hủy thay vì chảy để tạo hình lại.",
        ],
        worked: {
          prompt:
            "Hộp PP khá cứng ở nhiệt độ thường. Vì sao vẫn thuộc chất dẻo?",
          steps: [
            "“Cứng hay mềm ở nhiệt độ thường” mô tả trạng thái đang quan sát.",
            "“Chất dẻo” là nhóm vật liệu có khả năng tạo biến dạng dẻo trong điều kiện thích hợp.",
            "Vì thế không loại PP khỏi chất dẻo chỉ vì hộp PP đang cứng.",
          ],
        },
        mistake:
          "Không hiểu chất dẻo là mọi vật liệu luôn mềm. Cũng không cho rằng mọi polymer đều nóng chảy khi đun.",
        checkpoint: {
          question: "PPF đã đóng rắn thường có cấu trúc nào?",
          choices: [
            "Mạng không gian",
            "Chỉ các monomer rời",
            "Khí phân tử nhỏ",
          ],
          answer: 0,
          why: "PPF đóng rắn tạo mạng, là ví dụ điển hình trong nhóm vật liệu nhiệt rắn.",
        },
      },
      {
        explain: [
          "Theo dõi chuỗi trước và sau phản ứng. Nếu một mạch dài bị chia thành các đoạn ngắn hơn, đó là cắt mạch.",
          "Trong thủy phân, nước tham gia cắt các liên kết phù hợp. Cellulose và tinh bột thủy phân hoàn toàn cho glucose.",
          "Polyamide có thể bị thủy phân ở liên kết amide. Khả năng phản ứng cần gắn với liên kết cụ thể, không suy rộng cho mọi polymer.",
        ],
        worked: {
          prompt:
            "Thủy phân hoàn toàn 162 g cellulose lý thuyết thu bao nhiêu gam glucose?",
          steps: [
            "Một mol gốc C₆H₁₀O₅ có khối lượng 162 g.",
            "Mỗi gốc nhận thêm lượng nước tương ứng 18 g để tạo một mol C₆H₁₂O₆.",
            "Khối lượng glucose lý thuyết là 180 g; phần tăng 18 g đến từ nước.",
          ],
        },
        mistake:
          "Khối lượng sản phẩm thủy phân không luôn bằng khối lượng polymer ban đầu, vì còn nhận nước.",
        checkpoint: {
          question: "Thủy phân cellulose hoàn toàn tạo chất nào?",
          choices: ["Styrene", "Glucose", "Ethylene"],
          answer: 1,
          why: "Liên kết giữa các gốc glucose bị cắt; sản phẩm cuối là glucose khi thủy phân hoàn toàn.",
        },
      },
      {
        explain: [
          "Một phản ứng vẫn có thể xảy ra trên polymer mà chuỗi nguyên tử của mạch chính không đứt.",
          "Ví dụ, Br₂ cộng vào C=C còn lại của cao su buna. Hai nguyên tử Br gắn thêm vào hai C của nối đôi.",
          "Sau cộng, liên kết giữa hai C đó vẫn tồn tại dưới dạng liên kết đơn và chuỗi carbon còn liên tục: phản ứng giữ nguyên mạch.",
        ],
        worked: {
          prompt:
            "Phân loại phản ứng của [–CH₂–CH=CH–CH₂–]ₙ với Br₂ theo mô hình cộng.",
          steps: [
            "Nhận diện C=C ở giữa đoạn lặp.",
            "Sản phẩm mắt xích là –CH₂–CHBr–CHBr–CH₂–.",
            "Chuỗi bốn C không bị tách và không nối sang mạch khác, nên xếp giữ nguyên mạch.",
          ],
        },
        mistake:
          "Giữ nguyên mạch không có nghĩa là công thức và tính chất không đổi. Các nhóm chức, nối đôi vẫn biến đổi.",
        checkpoint: {
          question:
            "Dấu hiệu quyết định phản ứng giữ nguyên mạch trong ví dụ cộng Br₂ là gì?",
          choices: [
            "Không có phản ứng",
            "Số nguyên tử Br bằng 0",
            "Chuỗi C chính vẫn liên tục",
          ],
          answer: 2,
          why: "Phân loại dựa trên sự liên tục của mạch chính, không dựa vào việc polymer có thay đổi thành phần hay không.",
        },
      },
      {
        explain: [
          "Nếu các mạch riêng rẽ được liên kết với nhau, kích thước cấu trúc liên kết tăng lên và có thể tạo mạng không gian.",
          "Ở lưu hóa, cầu sulfur nối các mạch cao su. Sơ đồ tương tác biểu diễn các cầu nối này bằng đoạn màu cam.",
          "Đừng nhầm việc tạo polymer từ monomer với việc khâu các mạch polymer đã tồn tại. Hai bước có vai trò khác nhau.",
        ],
        worked: {
          prompt:
            "Trong sơ đồ cao su có cầu sulfur, vì sao xếp lưu hóa là tăng mạch?",
          steps: [
            "Trước lưu hóa, các chuỗi cao su được xét như các mạch riêng rẽ.",
            "Cầu sulfur tạo đường nối giữa những mạch này.",
            "Sản phẩm là mạng các mạch liên kết với nhau, nên thuộc phản ứng tăng mạch/khâu mạch.",
          ],
        },
        mistake:
          "Lưu hóa không biến sulfur thành monomer của buna-S. Chữ S trong tên buna-S vẫn chỉ styrene.",
        checkpoint: {
          question:
            "Thủy phân cellulose và lưu hóa cao su lần lượt thuộc kiểu nào?",
          choices: [
            "Cắt mạch; tăng mạch",
            "Tăng mạch; cắt mạch",
            "Giữ mạch; giữ mạch",
          ],
          answer: 0,
          why: "Thủy phân chia chuỗi; lưu hóa nối các chuỗi bằng cầu sulfur.",
        },
      },
    ],
  },
  plastics: {
    goals: [
      "Phân biệt polymer với vật liệu chất dẻo.",
      "Nhận diện PE, PP, PVC, PS, PMMA, PTFE và PPF.",
      "Xác định đúng pha nền và pha cốt trong composite.",
    ],
    terms: [
      [
        "Tính dẻo",
        "Khả năng tạo biến dạng còn giữ lại sau khi bỏ lực trong điều kiện thích hợp.",
      ],
      ["Pha nền", "Phần liên kết, bao bọc và truyền lực trong composite."],
      [
        "Pha cốt",
        "Thành phần gia cường như sợi carbon, sợi thủy tinh hoặc chất độn phù hợp.",
      ],
    ],
    parts: [
      {
        explain: [
          "Polymer là chất có phân tử rất lớn. Chất dẻo là vật liệu có thành phần polymer và tính dẻo trong điều kiện thích hợp.",
          "Vật liệu có thể chứa thêm chất hóa dẻo, chất màu, chất độn hoặc các phụ gia khác để phù hợp ứng dụng.",
          "Do đó, hai sản phẩm mang cùng tên polymer vẫn có thể khác độ mềm, độ cứng hoặc cách gia công.",
        ],
        worked: {
          prompt:
            "Một ống PVC cứng và một tấm PVC mềm có nhất thiết là hai polymer khác nhau không?",
          steps: [
            "Cùng tên PVC cho biết phần polymer tiêu biểu là poly(vinyl chloride).",
            "Tỉ lệ và loại phụ gia, cùng cách gia công, có thể khác.",
            "Chưa đủ căn cứ kết luận chúng là hai polymer khác nhau chỉ từ độ cứng mềm.",
          ],
        },
        mistake:
          "“Polymer nguyên chất” và “sản phẩm nhựa đang dùng” không luôn có thành phần hoàn toàn giống nhau.",
        checkpoint: {
          question:
            "Chất hóa dẻo trong một sản phẩm nhựa thuộc thành phần nào?",
          choices: [
            "Phụ gia",
            "Monomer bắt buộc của mọi polymer",
            "Mắt xích của cellulose",
          ],
          answer: 0,
          why: "Chất hóa dẻo là phụ gia có thể được phối vào vật liệu để điều chỉnh tính chất.",
        },
      },
      {
        explain: [
          "PE và PP chứa C, H trong mắt xích; PP có thêm nhóm thế CH₃ so với PE.",
          "PVC có Cl; PTFE có F; PS có C₆H₅. PMMA có nhóm ester ở nhóm thế và được dùng làm thủy tinh hữu cơ.",
          "PPF được tạo từ phenol và formaldehyde theo con đường trùng ngưng. Khi đã đóng rắn, đây là ví dụ vật liệu mạng nhiệt rắn.",
        ],
        worked: {
          prompt: "Phân biệt PVC, PS và PMMA bằng dấu hiệu cấu tạo.",
          steps: [
            "Tìm Cl trong –CH₂–CH(Cl)– để nhận ra PVC.",
            "Tìm nhóm C₆H₅ gắn bên mạch để nhận ra PS.",
            "Tìm cả CH₃ và COOCH₃ trên C của mắt xích PMMA. Ester này ở nhóm thế, không phải cầu ester của mạch polyester.",
          ],
        },
        mistake:
          "PMMA dùng làm thủy tinh hữu cơ nhưng vẫn là polymer. Nó không phải thủy tinh vô cơ silicate.",
        checkpoint: {
          question:
            "Chất thường được gọi là thủy tinh hữu cơ trong chương là gì?",
          choices: ["PE", "PMMA", "PVC"],
          answer: 1,
          why: "PMMA là poly(methyl methacrylate), được dùng trong thủy tinh hữu cơ.",
        },
      },
      {
        explain: [
          "Với composite nền polymer, hãy tìm thành phần bao quanh và gắn các phần khác với nhau: đó là nền.",
          "Thành phần sợi hoặc hạt được thêm để gia cường là cốt. Nền và cốt có vai trò khác nhau nhưng cùng tạo tính chất của vật liệu.",
          "Trong epoxy–sợi carbon, epoxy là nền, sợi carbon là cốt. Không đảo vai trò chỉ vì một thành phần có phần trăm khối lượng lớn hơn.",
        ],
        worked: {
          prompt:
            "Tấm composite 2 kg gồm 60% khối lượng sợi carbon, còn lại epoxy. Tính mỗi thành phần.",
          steps: [
            "m cốt = 2×0,60 = 1,2 kg.",
            "m nền = 2 − 1,2 = 0,8 kg.",
            "Tổng kiểm tra lại: 1,2 + 0,8 = 2 kg. Vai trò vẫn là cốt carbon, nền epoxy.",
          ],
        },
        mistake:
          "Phần trăm khối lượng phải đổi sang số thập phân khi nhân: 60% = 0,60.",
        checkpoint: {
          question: "Trong epoxy–sợi thủy tinh, thành phần nào là nền?",
          choices: ["Sợi thủy tinh", "Epoxy", "Không có nền"],
          answer: 1,
          why: "Epoxy liên kết và bao bọc cốt sợi thủy tinh.",
        },
      },
      {
        explain: [
          "Chọn composite vì cần phối hợp tính chất của các thành phần theo mục đích sử dụng.",
          "Độ bền còn phụ thuộc hướng sợi, cách sắp xếp và độ liên kết giữa nền với cốt. Không chỉ cần đọc tên hai chất.",
          "Composite là khái niệm vật liệu tổ hợp rộng. Trong chương này, các bài tập chủ yếu xét nền polymer.",
        ],
        worked: {
          prompt:
            "Một phát biểu nói “mọi composite đều chỉ gồm các polymer”. Đánh giá.",
          steps: [
            "Trong composite epoxy–carbon, phần nền là polymer epoxy.",
            "Cốt sợi carbon không phải một polymer hữu cơ thuộc các ví dụ trong chương.",
            "Vậy phát biểu “chỉ gồm các polymer” là sai, ngay cả với composite nền polymer.",
          ],
        },
        mistake:
          "Không đồng nhất “composite nền polymer” với “cả nền lẫn cốt đều là polymer”.",
        checkpoint: {
          question:
            "Thông tin nào cần biết thêm khi so sánh hai tấm composite cùng loại nền và cốt?",
          choices: [
            "Chỉ màu sơn",
            "Hướng sợi và cách sắp xếp cốt",
            "Tên người mua",
          ],
          answer: 1,
          why: "Cách bố trí cốt góp phần quyết định tính chất cơ học theo từng phương.",
        },
      },
    ],
  },
  fibers: {
    goals: [
      "Phân loại tơ theo nguồn gốc trước khi đếm.",
      "Nối tên thường gọi với cấu tạo và monomer.",
      "Phân biệt polyamide, polyester và PAN.",
    ],
    terms: [
      ["Tơ", "Vật liệu polymer có dạng sợi dài, mảnh, có độ bền nhất định."],
      ["Polyamide", "Polymer có liên kết amide –CO–NH– trong mạch."],
      ["Polyester", "Polymer có liên kết ester –CO–O– trong mạch."],
    ],
    parts: [
      {
        explain: [
          "Tơ thiên nhiên lấy từ nguồn tự nhiên: bông, len, tơ tằm là các ví dụ thường gặp.",
          "Bông có thành phần cellulose. Len và tơ tằm có thành phần protein, nên khác bông về cấu tạo hóa học.",
          "Khi câu hỏi chỉ hỏi nguồn gốc, cả ba cùng nhóm thiên nhiên. Khi hỏi thành phần, cần tách cellulose khỏi protein.",
        ],
        worked: {
          prompt:
            "Trong bông, len, tơ tằm, capron, có bao nhiêu tơ thiên nhiên?",
          steps: [
            "Đánh dấu bông, len và tơ tằm vì lấy từ nguồn tự nhiên.",
            "Capron là tơ tổng hợp nên loại khỏi nhóm đang đếm.",
            "Có 3 tơ thiên nhiên. Bông thuộc cellulose; hai loại còn lại thuộc protein.",
          ],
        },
        mistake: "Không cho rằng mọi tơ thiên nhiên đều là cellulose.",
        checkpoint: {
          question: "Cặp nào có thành phần chính là protein?",
          choices: ["Bông và visco", "Len và tơ tằm", "Capron và PAN"],
          answer: 1,
          why: "Len và tơ tằm là tơ protein. Bông, visco liên quan cellulose.",
        },
      },
      {
        explain: [
          "Hai tên cần nhớ của nhóm tơ bán tổng hợp ở phổ thông là visco và cellulose acetate.",
          "Visco được tạo bằng chế biến cellulose rồi tái sinh cellulose để tạo sợi.",
          "Cellulose acetate được tạo qua biến đổi hóa học cellulose. Nguyên liệu polymer thiên nhiên có sẵn là điểm giúp phân biệt nhóm này với tơ tổng hợp từ monomer.",
        ],
        worked: {
          prompt:
            "Vì sao visco được xếp tơ nhân tạo/bán tổng hợp trong bảng học?",
          steps: [
            "Nguyên liệu ban đầu là cellulose, một polymer thiên nhiên.",
            "Con người thực hiện các công đoạn chế biến và tái sinh để tạo sợi.",
            "Vì xuất phát từ polymer thiên nhiên, visco nằm trong nhóm tơ nhân tạo/bán tổng hợp theo phân loại phổ thông đang dùng.",
          ],
        },
        mistake:
          "Không xếp visco vào tơ tổng hợp chỉ vì sợi được sản xuất trong nhà máy.",
        checkpoint: {
          question: "Cặp nào cùng thuộc nhóm tơ bán tổng hợp?",
          choices: ["Visco, cellulose acetate", "Bông, tơ tằm", "Nylon-6, PAN"],
          answer: 0,
          why: "Visco và cellulose acetate đều được chế biến từ cellulose theo phân loại của chương.",
        },
      },
      {
        explain: [
          "Capron, nylon-6,6 và enang thuộc nhóm polyamide: tìm –CO–NH– trong mạch.",
          "Lapsan là PET, thuộc polyester: tìm –CO–O– trong mạch. Nitron hay olon là PAN: có nhóm CN bên mạch carbon.",
          "Khi đếm tơ tổng hợp, đối chiếu từng tên trong danh sách với các nhóm này. Không đếm các tên đồng nghĩa như hai chất nếu đề chỉ nêu một vật liệu.",
        ],
        worked: {
          prompt:
            "Trong capron, nylon-6,6, lapsan, visco, olon, có bao nhiêu tơ tổng hợp?",
          steps: [
            "Capron, nylon-6,6, lapsan và olon là tơ tổng hợp.",
            "Visco thuộc nhóm bán tổng hợp nên không tính.",
            "Kết quả là 4. Trong đó capron, nylon-6,6 là polyamide; lapsan là polyester; olon là PAN.",
          ],
        },
        mistake:
          "Có N trong công thức chưa đủ để gọi là polyamide. PAN có N trong nhóm CN nhưng không có liên kết amide ở mạch chính.",
        checkpoint: {
          question: "Tơ nào thuộc polyester?",
          choices: ["Nylon-6,6", "Lapsan (PET)", "Nitron (PAN)"],
          answer: 1,
          why: "PET có các liên kết ester trong mạch, khác liên kết amide của nylon và nhóm CN của PAN.",
        },
      },
      {
        explain: [
          "Capron = nylon-6. Một mắt xích –NH–(CH₂)₅–CO– có 5 C trong CH₂ và 1 C trong CO, tổng 6 C.",
          "Nylon-6,6 được đặt tên theo hai monomer đều có 6 C: diamine 6 C và diacid 6 C.",
          "Nitron = olon = tơ PAN. Lapsan = tơ PET. Học các cặp tên này cùng cấu tạo để tránh nhớ rời rạc.",
        ],
        worked: {
          prompt: "Đếm số C trong monomer HOOC–(CH₂)₄–COOH của nylon-6,6.",
          steps: [
            "Bốn nhóm CH₂ đóng góp 4 nguyên tử C.",
            "Mỗi nhóm COOH có thêm 1 C; hai nhóm góp 2 C.",
            "Tổng là 6 C, không phải 4 C. Đây là một số 6 trong tên nylon-6,6.",
          ],
        },
        mistake:
          "Nhóm CO, COOH và COO đều chứa carbon. Đừng chỉ đếm các nhóm CH₂.",
        checkpoint: {
          question: "Capron và nylon-6 là bao nhiêu loại tơ khác nhau?",
          choices: ["Một", "Hai", "Sáu"],
          answer: 0,
          why: "Đó là hai tên của cùng một loại tơ trong chương.",
        },
      },
    ],
  },
  rubber: {
    goals: [
      "Nhận ra monomer và mắt xích của các cao su thông dụng.",
      "Tách biệt đồng trùng hợp với lưu hóa.",
      "Phân biệt nhựa vá săm, epoxy, keo urea–formaldehyde và bài keo 502.",
    ],
    terms: [
      [
        "Đàn hồi",
        "Biến dạng khi chịu lực rồi có khả năng trở lại hình dạng ban đầu khi bỏ lực.",
      ],
      [
        "Cộng 1,4",
        "Cách nối mạch của diene trong mô hình đang học, để lại nối đôi giữa hai C ở giữa.",
      ],
      [
        "Chất đóng rắn",
        "Thành phần giúp nhựa tạo cấu trúc bền, ví dụ amine dùng với epoxy.",
      ],
    ],
    parts: [
      {
        explain: [
          "Buta-1,3-diene có hai nối đôi. Theo mô hình cộng 1,4, mạch tạo thành còn một nối đôi trong mỗi mắt xích.",
          "Isoprene có thêm nhóm CH₃; mắt xích là –CH₂–C(CH₃)=CH–CH₂–. Cao su thiên nhiên chủ yếu là dạng cis-polyisoprene.",
          "Tính đàn hồi mô tả khả năng phục hồi hình dạng. Đừng nhầm với tính dẻo, khi vật còn giữ biến dạng sau khi bỏ lực.",
        ],
        worked: {
          prompt:
            "Một mạch buna có 200 mắt xích theo mô hình cộng 1,4. Còn bao nhiêu nối đôi C=C?",
          steps: [
            "Một mắt xích –CH₂–CH=CH–CH₂– còn 1 nối đôi.",
            "Nhân số nối đôi trên một mắt xích với số mắt xích.",
            "Có 200 nối đôi C=C trong mô hình bỏ qua nhóm cuối.",
          ],
        },
        mistake:
          "Hai nối đôi của monomer butadiene không có nghĩa mỗi mắt xích buna còn hai nối đôi.",
        checkpoint: {
          question:
            "Trong mô hình cộng 1,4, một mắt xích isoprene còn mấy nối đôi?",
          choices: ["0", "1", "2"],
          answer: 1,
          why: "Còn một nối đôi ở giữa đoạn lặp, như công thức –CH₂–C(CH₃)=CH–CH₂–.",
        },
      },
      {
        explain: [
          "Buna-S và buna-N được tạo từ hai loại monomer, nên cần nhớ cả cặp nguyên liệu.",
          "Buna-S: butadiene + styrene. Buna-N: butadiene + acrylonitrile.",
          "Lưu hóa thực hiện trên cao su để tạo cầu nối giữa các mạch. Đây là biến đổi cấu trúc mạng sau khi đã có polymer.",
        ],
        worked: {
          prompt: "Phát biểu “buna-S tạo từ butadiene và sulfur” sai ở đâu?",
          steps: [
            "Cặp monomer đúng của buna-S là butadiene và styrene.",
            "Sulfur có thể tham gia bước lưu hóa để nối các mạch cao su.",
            "Phát biểu đã trộn lẫn nguyên liệu đồng trùng hợp với chất dùng trong khâu mạch.",
          ],
        },
        mistake:
          "Ghi nhớ ba vai trò riêng: styrene tạo buna-S; acrylonitrile tạo buna-N; sulfur giúp lưu hóa.",
        checkpoint: {
          question: "Bước nào tạo cầu nối giữa các mạch cao su đã có?",
          choices: ["Lưu hóa", "Chỉ hòa tan", "Thủy phân hoàn toàn"],
          answer: 0,
          why: "Lưu hóa tạo liên kết ngang, còn hòa tan không tự tạo mạng và thủy phân làm cắt mạch.",
        },
      },
      {
        explain: [
          "Nhựa vá săm gồm cao su hòa tan trong dung môi hữu cơ. Đó là loại keo dung dịch được mô tả trong tài liệu.",
          "Epoxy hai thành phần gồm nhựa epoxy và chất đóng rắn, thường là amine trong bài học. Khi trộn, phản ứng tạo mạng bền.",
          "Keo urea–formaldehyde được tạo bằng trùng ngưng urea và formaldehyde, thường dùng cho gỗ và ván ép.",
        ],
        worked: {
          prompt:
            "Một keo cần trộn hai phần: nhựa có nhóm epoxy và chất đóng rắn amine. Xác định loại keo.",
          steps: [
            "Dấu hiệu nhựa epoxy chỉ ra thành phần thứ nhất.",
            "Amine là thành phần đóng rắn giúp hình thành mạng.",
            "Đó là keo epoxy hai thành phần, khác nhựa vá săm là dung dịch cao su trong dung môi.",
          ],
        },
        mistake:
          "Không gọi chung mọi keo dán là epoxy. Thành phần và cách tạo lớp kết dính có thể khác nhau.",
        checkpoint: {
          question:
            "Keo urea–formaldehyde gắn với ứng dụng nào trong tài liệu?",
          choices: ["Gỗ, ván ép", "Tơ bông thiên nhiên", "Monomer tạo PE"],
          answer: 0,
          why: "Keo urea–formaldehyde được dùng làm chất kết dính cho sản phẩm gỗ, ván ép.",
        },
      },
      {
        explain: [
          "Bài tập cho rõ monomer methyl cyanoacrylate CH₂=C(CN)–COOCH₃. Phải dùng đúng monomer đề cho.",
          "Hơi ẩm hỗ trợ khơi mào phản ứng trùng hợp, tạo màng polymer kết dính.",
          "Cặp C=C là nơi nối mạch; CN và COOCH₃ vẫn gắn trên C thứ hai. Hơi ẩm không có nghĩa phản ứng đang tách nước.",
        ],
        worked: {
          prompt:
            "Từ CH₂=C(CN)–COOCH₃, kiểm tra sản phẩm [–CH₂–C(CN)(COOCH₃)–]ₙ.",
          steps: [
            "Hai C của nối đôi trở thành hai C liên tiếp trên mạch chính.",
            "CN và COOCH₃ được giữ nguyên, nên C thứ hai không mang thêm H.",
            "Sản phẩm đúng về nhóm thế trong sơ đồ trùng hợp của bài; không ghi thêm nH₂O ở vế sản phẩm.",
          ],
        },
        mistake:
          "Không thay nhóm CN bằng NH₂ và không gọi đây là trùng ngưng chỉ vì có nhóm ester.",
        checkpoint: {
          question: "Trong phản ứng keo 502 của bài tập, có tách nước không?",
          choices: [
            "Có, vì không khí ẩm",
            "Không, đây là trùng hợp",
            "Luôn tách 2nH₂O",
          ],
          answer: 1,
          why: "Hơi ẩm hỗ trợ khơi mào. Monomer nối mạch qua C=C và không tách nước trong phương trình này.",
        },
      },
    ],
  },
  calculations: {
    goals: [
      "Chọn đúng công thức trước khi thay số.",
      "Đi xuôi nhân hiệu suất, đi ngược chia hiệu suất.",
      "Đổi đơn vị và kiểm tra tỉ lệ mol ở từng bước.",
    ],
    terms: [
      [
        "M₀",
        "Khối lượng của một mắt xích, tính đủ mọi nguyên tử trong đoạn lặp.",
      ],
      [
        "Hiệu suất H",
        "Lượng thực tế chia lượng lý thuyết, dùng dạng thập phân trong phép tính.",
      ],
      ["Vₘ", "Thể tích mol khí tại đúng nhiệt độ và áp suất mà đề cho."],
    ],
    parts: [
      {
        explain: [
          "Gạch chân đại lượng cần tìm: nếu là số mắt xích, hãy viết n ≈ M/M₀.",
          "Cellulose dùng gốc C₆H₁₀O₅, M₀ = 162. Không dùng glucose C₆H₁₂O₆, M = 180, vì đó là phân tử sau thủy phân hoàn toàn.",
          "Với nylon-6,6, M₀ = 116 + 146 − 2×18 = 226. Với capron, M₀ = 131 − 18 = 113, trong mô hình bỏ qua nhóm cuối.",
        ],
        worked: {
          prompt:
            "Cellulose có M trung bình 590 000 amu. Tính n, làm tròn đến hàng đơn vị.",
          steps: [
            "M₀ = 6×12 + 10×1 + 5×16 = 162 amu.",
            "n ≈ 590 000/162 = 3 641,9753…",
            "Chỉ làm tròn ở bước cuối: n ≈ 3 642. Kiểm tra 3 642×162 gần 590 000.",
          ],
        },
        mistake:
          "Không làm tròn M₀ hoặc kết quả trung gian tùy ý; chỉ làm tròn theo yêu cầu đáp số.",
        checkpoint: {
          question:
            "Teflon có M = 400 000 amu và M₀ = 100 amu. n là bao nhiêu?",
          choices: ["400", "4 000", "40 000"],
          answer: 1,
          why: "n = 400 000/100 = 4 000.",
        },
      },
      {
        explain: [
          "Với trùng hợp không tạo sản phẩm phụ, khối lượng polymer lý thuyết bằng khối lượng monomer đã tham gia phản ứng, khi bỏ qua nhóm cuối.",
          "Đi xuôi: m polymer thực tế = m monomer ban đầu × H. Ví dụ 80% phải thay bằng 0,80.",
          "Đi ngược: m monomer ban đầu = m polymer cần thu/H. Nếu bài có trùng ngưng, phải tính thêm phần khối lượng phân tử nhỏ tách ra.",
        ],
        worked: {
          prompt:
            "Cần thu 100 kg PVC với hiệu suất trùng hợp 80%. Tính vinyl chloride ban đầu.",
          steps: [
            "Đặt m là khối lượng vinyl chloride. Theo trùng hợp, lượng PVC lý thuyết là m.",
            "Lượng PVC thực tế: 0,80m = 100.",
            "m = 100/0,80 = 125 kg. Kiểm tra lại: 125×0,80 = 100 kg.",
          ],
        },
        mistake:
          "Muốn có đủ sản phẩm ở hiệu suất dưới 100%, nguyên liệu cần tăng. Nhân 100×0,80 khi đi ngược sẽ cho kết quả quá nhỏ.",
        checkpoint: {
          question:
            "Trùng hợp 40 kg ethylene ở hiệu suất 80% thu bao nhiêu kg PE?",
          choices: ["32", "40", "50"],
          answer: 0,
          why: "Đi xuôi nhân hiệu suất: 40×0,80 = 32 kg.",
        },
      },
      {
        explain: [
          "Viết tỉ lệ mol trước: 2 ethanol → 1 butadiene → 1 đơn vị mắt xích buna. Hệ số 2 là bước dễ bỏ sót.",
          "Với các hiệu suất liên tiếp H₁ và H₂, lượng cuối cùng so với tuyến lý thuyết được nhân H₁H₂.",
          "Hai mol ethanol có khối lượng 92 g, còn một mol mắt xích buna có khối lượng 54 g. Vì vậy không lấy khối lượng ethanol bằng khối lượng cao su.",
        ],
        worked: {
          prompt:
            "Ethanol → butadiene, H₁ = 50%; butadiene → buna, H₂ = 80%. Cần bao nhiêu ethanol cho 54 g buna?",
          steps: [
            "Nếu hiệu suất 100%, 92 g ethanol tương ứng 54 g cao su theo sơ đồ.",
            "H toàn bộ = 0,50×0,80 = 0,40.",
            "m ethanol = 54×92/(54×0,40) = 230 g. Thử xuôi: 230×54/92×0,40 = 54 g.",
          ],
        },
        mistake:
          "Không cộng 50% + 80%. Cũng không nhân hai hiệu suất thêm lần nữa nếu đề đã cho hiệu suất toàn quá trình.",
        checkpoint: {
          question:
            "Hai bước có hiệu suất 60% và 75%. Hiệu suất toàn bộ là bao nhiêu?",
          choices: ["135%", "45%", "60%"],
          answer: 1,
          why: "H = 0,60×0,75 = 0,45 = 45%.",
        },
      },
      {
        explain: [
          "Nếu đề cho 25 °C và 1 bar, dùng Vₘ = 24,79 L/mol như tài liệu. Đổi m³ sang L trước khi chia; hoặc dùng nhất quán m³/kmol.",
          "Theo sơ đồ methane → acetylene → vinyl chloride → PVC, 2 mol CH₄ tương ứng tối đa 1 mol mắt xích PVC.",
          "Với composite, m thành phần = m toàn bộ × phần khối lượng. Dạng này không cần tự thêm phản ứng hay hiệu suất nếu đề không cho.",
        ],
        worked: {
          prompt:
            "495,8 m³ khí chứa 80% CH₄, hiệu suất toàn quá trình thành PVC 50%. Tính kg PVC.",
          steps: [
            "V CH₄ = 495,8×0,80 = 396,64 m³ = 396 640 L.",
            "n CH₄ = 396 640/24,79 = 16 000 mol; n mắt xích lý thuyết = 8 000 mol.",
            "m PVC = 8 000×62,5×0,50 = 250 000 g = 250 kg. Hiệu suất 50% được áp dụng một lần.",
          ],
        },
        mistake:
          "Phần trăm CH₄ và hiệu suất là hai đại lượng khác nhau: một đại lượng chọn lượng CH₄ trong hỗn hợp, một đại lượng mô tả chuyển hóa.",
        checkpoint: {
          question:
            "Tấm composite 3,2 kg có 37,5% khối lượng cốt. Khối lượng cốt là bao nhiêu?",
          choices: ["1,2 kg", "12 kg", "0,12 kg"],
          answer: 0,
          why: "3,2×0,375 = 1,2 kg. Nếu hỏi gam, đổi tiếp thành 1 200 g.",
        },
      },
    ],
  },
  environment: {
    goals: [
      "Liên hệ đặc điểm vật liệu với điều kiện sử dụng.",
      "Phân biệt phân mảnh với phân hủy hoàn toàn.",
      "Chọn được cách giảm rác và phân loại phù hợp.",
    ],
    terms: [
      ["Phân mảnh", "Vật lớn vỡ thành nhiều mảnh nhỏ hơn."],
      [
        "Tái sử dụng",
        "Tiếp tục dùng sản phẩm theo điều kiện và mục đích phù hợp.",
      ],
      [
        "Tái chế",
        "Xử lí vật liệu đã dùng để thu vật liệu hoặc sản phẩm cho chu trình tiếp theo.",
      ],
    ],
    parts: [
      {
        explain: [
          "Bắt đầu từ yêu cầu của vật dụng: cần độ bền, tính dẻo, khả năng cách điện hay tính trong suốt.",
          "Đối chiếu tên polymer với ứng dụng trong chương, rồi nhớ rằng tính chất sản phẩm còn phụ thuộc phụ gia và cách chế tạo.",
          "Khi sử dụng một sản phẩm thật, đọc hướng dẫn của chính sản phẩm để biết giới hạn nhiệt và mục đích sử dụng.",
        ],
        worked: {
          prompt:
            "Chỉ nhìn kí hiệu PP, có kết luận mọi hộp PP đều dùng được ở mọi nhiệt độ không?",
          steps: [
            "Kí hiệu PP giúp nhận diện loại polymer chính.",
            "Sản phẩm có thể khác phụ gia, cấu trúc, thiết kế và điều kiện sử dụng.",
            "Vì vậy cần xem hướng dẫn cụ thể, không suy ra giới hạn sử dụng chỉ từ tên PP.",
          ],
        },
        mistake:
          "Không biến một ứng dụng thường gặp trong sách thành kết luận áp dụng cho mọi sản phẩm thực tế.",
        checkpoint: {
          question:
            "Thông tin nào cần ưu tiên khi dùng hộp nhựa ở một điều kiện cụ thể?",
          choices: [
            "Hướng dẫn trên sản phẩm",
            "Chỉ màu của hộp",
            "Chỉ giá bán",
          ],
          answer: 0,
          why: "Hướng dẫn của sản phẩm xác định điều kiện dùng cụ thể; màu sắc hoặc giá không thay thế thông tin này.",
        },
      },
      {
        explain: [
          "Vật nhựa mất hình dạng ban đầu hoặc vỡ nhỏ chưa cho biết các mạch polymer đã phân hủy hoàn toàn.",
          "Các mảnh nhỏ có thể tiếp tục tồn tại và phát tán. Vì vậy cần tách câu hỏi kích thước vật với câu hỏi biến đổi hóa học.",
          "Độ bền của nhiều polymer hữu ích khi sử dụng nhưng cũng liên quan tới việc rác có thể tích lũy sau sử dụng.",
        ],
        worked: {
          prompt:
            "Một túi nhựa vỡ thành nhiều mảnh nhỏ. Phát biểu “nhựa đã biến mất hoàn toàn” có đúng không?",
          steps: [
            "Quan sát mới chỉ cho thấy vật ban đầu đã phân mảnh.",
            "Chưa có bằng chứng toàn bộ polymer chuyển thành các chất khác.",
            "Không kết luận đã phân hủy hoàn toàn chỉ từ việc không còn thấy túi nguyên vẹn.",
          ],
        },
        mistake: "Nhỏ hơn không đồng nghĩa không còn vật liệu polymer.",
        checkpoint: {
          question: "Túi nhựa vỡ thành mảnh nhỏ chứng minh trực tiếp điều gì?",
          choices: [
            "Đã phân mảnh",
            "Đã phân hủy hoàn toàn",
            "Đã thành cellulose",
          ],
          answer: 0,
          why: "Sự vỡ nhỏ là thông tin về kích thước. Muốn kết luận phân hủy hóa học cần thông tin khác.",
        },
      },
      {
        explain: [
          "Khi học câu nhận biết bằng hiện tượng nhiệt, hãy giải thích dựa trên thành phần polymer được đề nêu.",
          "PVC chứa Cl và có thể giải phóng HCl khi phân hủy nhiệt. Không tự đốt hoặc ngửi khói vật liệu để thử đáp án.",
          "Với một mẫu thực tế, phụ gia và lớp phủ có thể làm hiện tượng phức tạp hơn ví dụ trong sách.",
        ],
        worked: {
          prompt:
            "Vì sao câu phân biệt da thật và giả da PVC được giải như bài lý thuyết?",
          steps: [
            "Đề đã quy ước hai mẫu là vật liệu protein và PVC.",
            "Lời giải dựa vào khác biệt thành phần và hiện tượng phân hủy của chúng.",
            "Không dùng bài tập làm hướng dẫn tự đốt mẫu. Quan sát thực nghiệm cần theo tổ chức của giáo viên.",
          ],
        },
        mistake:
          "Không tự suy ra thành phần của mọi vật liệu chỉ từ mùi hoặc hiện tượng khi đốt.",
        checkpoint: {
          question:
            "Cách tiếp cận phù hợp với bài nhận biết nhiệt trong tài liệu là gì?",
          choices: [
            "Tự đốt ở nhà",
            "Phân tích lý thuyết và quan sát do giáo viên tổ chức",
            "Ngửi trực tiếp khói",
          ],
          answer: 1,
          why: "Bài yêu cầu hiểu khác biệt thành phần; không cần tự tạo khói để học kiến thức này.",
        },
      },
      {
        explain: [
          "Giảm phát sinh rác bắt đầu từ nhu cầu dùng: hạn chế đồ một lần khi có lựa chọn phù hợp.",
          "Tái sử dụng cần theo thiết kế và điều kiện của sản phẩm. Giữ vật liệu sạch giúp quá trình phân loại thuận lợi hơn.",
          "Khả năng tái chế về mặt kỹ thuật không bảo đảm loại đó đang được thu gom tại nơi sống. Cần theo hướng dẫn phân loại tại địa phương.",
        ],
        worked: {
          prompt:
            "Đề yêu cầu nêu một cách xử lí đồ nhựa sau sử dụng. Trình bày thế nào cho đủ ý?",
          steps: [
            "Nêu hành động cụ thể: phân loại vật liệu sau dùng theo hướng dẫn thu gom.",
            "Giải thích mục đích: đưa đúng loại vật liệu vào hệ thống có khả năng tiếp nhận.",
            "Kết hợp giảm dùng một lần và tái sử dụng đúng thiết kế để giảm lượng rác ngay từ đầu.",
          ],
        },
        mistake:
          "Không khẳng định mọi vật có kí hiệu nhựa đều chắc chắn được tái chế trong mọi hệ thống thu gom.",
        checkpoint: {
          question:
            "Để biết một loại nhựa có được thu gom tái chế tại nơi ở hay không, cần kiểm tra gì?",
          choices: [
            "Hướng dẫn của hệ thống thu gom địa phương",
            "Chỉ độ bóng của nhựa",
            "Chỉ khối lượng vật",
          ],
          answer: 0,
          why: "Hệ thống thu gom quyết định những loại được tiếp nhận tại địa phương.",
        },
      },
    ],
  },
};
