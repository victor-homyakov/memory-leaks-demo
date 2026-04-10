import React, { useMemo, useState } from "react";

const blockStyle: React.CSSProperties = {
    border: "1px solid #e2e8f0",
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
};

const buttonStyle: React.CSSProperties = {
    padding: "8px 14px",
    borderRadius: 6,
    border: "1px solid #94a3b8",
    background: "#f1f5f9",
    cursor: "pointer",
};

const pStyle: React.CSSProperties = { margin: "0 0 12px", fontSize: "0.9em", color: "#64748b" };

const overlayStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
};

const modalContentStyle: React.CSSProperties = {
    background: "#fff",
    borderRadius: 12,
    padding: 24,
    minWidth: 340,
    maxWidth: 480,
    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
};

const h3Style: React.CSSProperties = { margin: "0 0 8px", fontSize: "1.05em" };

function stopPropagation(e: React.MouseEvent) {
    e.stopPropagation();
}

interface DataItem {
    id: number;
    value: string;
}

function createCachedSelector() {
    let cache: { input: null; result: null } | { input: DataItem[]; result: string[] } = { input: null, result: null };

    return (items: DataItem[]): string[] => {
        if (cache.input === items) {
            return cache.result;
        }

        cache = { input: items, result: items.map((item) => `[processed] ${item.value}`) };
        return cache.result;
    };
}

const selectProcessedData = createCachedSelector();

const MEMO_ITEM_COUNT = 10_000;

export function MemoStableModalDemo() {
    const [modalOpen, setModalOpen] = useState(false);
    const [initialized, setInitialized] = useState(false);

    const heavyData = useMemo<DataItem[]>(() => {
        if (!initialized) {
            return [];
        }
        // console.log("allocating heavyData", initialized);
        return Array.from({ length: MEMO_ITEM_COUNT }, (_, i) => ({
            id: i,
            value: `item-${i}-${"x".repeat(100)}`,
        }));
    }, [initialized]);

    const processedData = useMemo(() => {
        if (heavyData.length === 0) {
            return [];
        }
        // console.log("allocating processedData", heavyData.length);
        return selectProcessedData(heavyData);
    }, [heavyData]);

    const handleOpen = () => {
        setInitialized(true);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div style={blockStyle}>
            <h3 style={h3Style}>useMemo + cached selector</h3>

            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 8 }}>
                <button onClick={handleOpen} style={buttonStyle} type="button">
                    Open modal
                </button>
                <span style={{ fontSize: "0.85em", color: "#64748b" }}>
                    useMemo rows: {heavyData.length.toLocaleString()} | Selector strings:{" "}
                    {processedData.length.toLocaleString()}
                </span>
            </div>

            {modalOpen ? (
                <div onClick={handleCloseModal} role="presentation" style={overlayStyle}>
                    <div onClick={stopPropagation} role="presentation" style={modalContentStyle}>
                        <h3 style={{ margin: "0 0 12px" }}>Modal</h3>
                        <p style={pStyle}>
                            First open runs the memos and fills the selector cache. Later opens reuse the same{" "}
                            <code>heavyData</code> reference and cached derived strings.
                        </p>
                        <p style={{ ...pStyle, fontWeight: 500 }}>
                            Rows: {heavyData.length.toLocaleString()} | Processed:{" "}
                            {processedData.length.toLocaleString()}
                        </p>
                        <button onClick={handleCloseModal} style={buttonStyle} type="button">
                            Close
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
