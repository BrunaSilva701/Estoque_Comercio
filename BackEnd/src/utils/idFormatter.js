function formatId(id) {
    return id.toString().padStart(6,'0');
}

module.exports = { formatId };