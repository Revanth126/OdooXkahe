import checklistData from "../data/checklistData";

function PackingChecklist() {
  return (
    <div
      style={{
        background: "#FAF7F2",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
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
              color: "#2B2118",
              fontSize: "56px",
              marginBottom: "10px",
            }}
          >
            Packing Checklist
          </h1>

          <p
            style={{
              color: "#8B735F",
              fontSize: "18px",
            }}
          >
            Stay organized for your luxury travel experience.
          </p>
        </div>

        <button
          style={{
            background: "#7C5C3B",
            color: "white",
            border: "none",
            padding: "16px 28px",
            borderRadius: "18px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Add Item
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: "24px",
          marginBottom: "30px",
        }}
      >
        <div style={summaryCard}>
          <h3 style={summaryTitle}>Total Items</h3>
          <h1 style={summaryNumber}>12</h1>
        </div>

        <div style={summaryCard}>
          <h3 style={summaryTitle}>Packed</h3>
          <h1 style={{ ...summaryNumber, color: "#6B8E62" }}>6</h1>
        </div>

        <div style={summaryCard}>
          <h3 style={summaryTitle}>Remaining</h3>
          <h1 style={{ ...summaryNumber, color: "#C58B39" }}>6</h1>
        </div>

        <div style={summaryCard}>
          <h3 style={summaryTitle}>Readiness</h3>
          <h1 style={summaryNumber}>50%</h1>
        </div>
      </div>

      <div
        style={{
          background: "#F5EEE6",
          padding: "24px",
          borderRadius: "24px",
          marginBottom: "40px",
          border: "1px solid #E7DDD1",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "14px",
          }}
        >
          <h2
            style={{
              color: "#2B2118",
            }}
          >
            Packing Progress
          </h2>

          <h2
            style={{
              color: "#7C5C3B",
            }}
          >
            50%
          </h2>
        </div>

        <div
          style={{
            background: "#E7DDD1",
            height: "14px",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              background: "#7C5C3B",
              width: "50%",
              height: "100%",
              borderRadius: "20px",
            }}
          ></div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "28px",
        }}
      >
        {checklistData.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E7DDD1",
              borderRadius: "28px",
              padding: "28px",
              transition: "0.3s",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(0,0,0,0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.background = "#F8F4EE";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.background = "#FFFFFF";
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <h2
                style={{
                  color: "#2B2118",
                  fontSize: "30px",
                }}
              >
                {item.item}
              </h2>

              <input type="checkbox" checked={item.packed} />
            </div>

            <p
              style={{
                color: "#8B735F",
                marginBottom: "20px",
                fontSize: "18px",
              }}
            >
              {item.category}
            </p>

            <span
              style={{
                background:
                  item.priority === "High"
                    ? "#F3E3DC"
                    : item.priority === "Medium"
                    ? "#F7E7C6"
                    : "#E5F0E1",

                color:
                  item.priority === "High"
                    ? "#B85C5C"
                    : item.priority === "Medium"
                    ? "#C58B39"
                    : "#6B8E62",

                padding: "10px 18px",
                borderRadius: "30px",
                fontWeight: "600",
              }}
            >
              {item.priority} Priority
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const summaryCard = {
  background: "#FFFFFF",
  border: "1px solid #E7DDD1",
  borderRadius: "24px",
  padding: "30px",
  textAlign: "center",
  boxShadow: "0 8px 20px rgba(0,0,0,0.03)",
};

const summaryTitle = {
  color: "#8B735F",
  marginBottom: "14px",
  fontSize: "20px",
};

const summaryNumber = {
  color: "#2B2118",
  fontSize: "42px",
};

export default PackingChecklist;