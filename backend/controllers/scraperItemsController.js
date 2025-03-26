const { getAmazonItems } =  require('../model/itemsModel.js');

const handleScrapeItemRequest = async (req, res) => {
    const { keyword } = req.query;

    if (!keyword) {
        return res.status(400).json({error: 'Keyword is required!'});
    }

    try{
        const items = await getAmazonItems(keyword);
        if (!items || items.length === 0) {
            return res.status(404).json({ message: 'No items found.' });
        }

        res.json(items);
    } catch(error) {
        res.status(500).json( { error: error.message } );
    }
}

module.exports = { handleScrapeItemRequest };