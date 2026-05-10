import checklistData from "../data/checklistData";

function PackingChecklist() {

  const packedItems = checklistData.filter(
    (item) => item.packed
  ).length;

  const remainingItems =
    checklistData.length - packedItems;

  const progress = Math.floor(
    (packedItems / checklistData.length) * 100
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#06131F",
        color: "#F8FAFC",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >

      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >

        <div>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "bold",
            }}
          >
            Packing Checklist
          </h1>

          <p
            style={{
              color: "#94A3B8",
            }}
          >
            Stay organized for your Europe Adventure Trip.
          </p>
        </div>

        <button
          style={{
            background: "#00B4D8",
            border: "none",
            padding: "14px 24px",
            borderRadius: "12px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Add Item
        </button>

      </div>

      {/* ANALYTICS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >

        <div style={cardStyle}>
          <p style={labelStyle}>Total Items</p>
          <h2>{checklistData.length}</h2>
        </div>

        <div style={cardStyle}>
          <p style={labelStyle}>Packed</p>
          <h2 style={{ color: "#06D6A0" }}>
            {packedItems}
          </h2>
        </div>

        <div style={cardStyle}>
          <p style={labelStyle}>Remaining</p>
          <h2 style={{ color: "#FFB703" }}>
            {remainingItems}
          </h2>
        </div>

        <div style={cardStyle}>
          <p style={labelStyle}>Readiness</p>
          <h2>{progress}%</h2>
        </div>

      </div>

      {/* PROGRESS */}

      <div
        style={{
          ...cardStyle,
          marginBottom: "40px",
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "12px",
          }}
        >
          <p>Packing Progress</p>
          <p>{progress}%</p>
        </div>

        <div
          style={{
            width: "100%",
            height: "16px",
            background: "#163247",
            borderRadius: "20px",
          }}
        >

          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background:
                "linear-gradient(to right,#0077B6,#00B4D8)",
              borderRadius: "20px",
            }}
          />

        </div>

      </div>

      {/* CATEGORY */}

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >

        {[
          "All",
          "Documents",
          "Clothes",
          "Electronics",
          "Health",
        ].map((category) => (

          <button
            key={category}
            style={{
              background: "#102235",
              border: "1px solid #163247",
              padding: "12px 18px",
              borderRadius: "12px",
              color: "white",
              cursor: "pointer",
            }}
          >
            {category}
          </button>

        ))}

      </div>

      {/* CHECKLIST */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >

        {checklistData.map((item) => (

          <div
            key={item.id}
            style={{
              ...cardStyle,
              transition: "0.3s",
              cursor: "pointer",
            }}

            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >

              <h2>{item.item}</h2>

              <input
                type="checkbox"
                checked={item.packed}
                readOnly
              />

            </div>

            <p
              style={{
                color: "#94A3B8",
                marginTop: "10px",
              }}
            >
              {item.category}
            </p>

            <div
              style={{
                marginTop: "20px",
              }}
            >

              <span
                style={{
                  padding: "8px 14px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "bold",

                  background:
                    item.priority === "High"
                      ? "#EF476F33"
                      : item.priority === "Medium"
                      ? "#FFB70333"
                      : "#06D6A033",

                  color:
                    item.priority === "High"
                      ? "#EF476F"
                      : item.priority === "Medium"
                      ? "#FFB703"
                      : "#06D6A0",
                }}
              >
                {item.priority} Priority
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

const cardStyle = {
  background: "#0B1E2D",
  border: "1px solid #163247",
  borderRadius: "20px",
  padding: "24px",
  boxShadow: "0 0 20px rgba(0,180,216,0.08)",
};

const labelStyle = {
  color: "#94A3B8",
  marginBottom: "10px",
};

export default PackingChecklist;