const styles = {
    container: {
        alignItems: "center",
        maxWidth: 640,
        padding: 16,
        borderRadius: 8,
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
        background: "#cab1b1ff",
        fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    },
    row: {
        display: "flex",
        gap: 12,
        alignItems: "center",
        marginBottom: 12,
    },
    label: {
        width: 90,
        fontSize: 14,
        color: "#333",
    },
    checkboxLabel: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 13,
        color: "#333",
    },
    button: {
        padding: "8px 12px",
        borderRadius: 6,
        border: "1px solid #acb89bff",
        background: "#31a1a5ff",
        cursor: "pointer",
    },
    passwordBox: {
        marginTop: 12,
        padding: 12,
        borderRadius: 6,
        border: "1px solid #353434ff",
        background: "#87b36bff",
        fontFamily: "monospace",
        fontSize: 16,
        wordBreak: "break-all",
    },
};

export default styles;
