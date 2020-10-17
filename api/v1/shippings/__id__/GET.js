module.exports = function(request, response) {
    response.json({
        tracking_number: request.params.id,
        driver_id: 3302
    })
}