import React from 'react'
import { Button, Icon, Modal, Card, Image} from 'semantic-ui-react'

const images = [
    "http://www.images.searchpointer.com/power-tools/7607/4.jpg",
    "https://www.swimming.org.au/CMSPages/GetFile.aspx?guid=30581d0b-449a-4605-a82f-1bb75f4638da&maxsidesize=500",
    "https://image.freepik.com/free-vector/sports-elements-collection_1096-210.jpg",
    "http://motherhoodsite.motherhoodcenter.netdna-cdn.com/wp-content/uploads/2012/11/home-babysitting-motherhood-center-houston.jpg",
    "https://profur.ca/wp-content/uploads/2012/10/dog-walker-insurance.jpg",
    "https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAWBAAAAJDdlYzM3NTU5LWY5ZTMtNDFmNC1iNGUzLTBlZDI2NjA1NmQxOA.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/09E5_7ZfxH2WQoboQsMRZw/348s.jpg",
    "http://img.bhs4.com/de/3/de3b2b0064314c3d5847a206729d474b673dd040_large.jpg",
    "https://lh5.ggpht.com/rijXdRXVHH26s7qrE0iXa_312ngEhhtNWBpCzj4xUDKw2sd48LX5t14OH4pC6vF48SE=w170",
    "http://sensatejournal.com//wp-content/themes/sensate/images/icon_programming.png",
    "https://s3-media2.fl.yelpcdn.com/bphoto/SNBxT0mSx7_TkN7hK7M9YA/258s.jpg",
    "http://img.freepik.com/free-vector/coloured-chefdesign_1152-72.jpg?size=338&ext=jpg",
    "http://www.learning-disabilities-reading-tutor.com/reading-tutor-fb.jpg"]

const mapImagesToCard = () => images.map((el, idx) => {
    return <Card key={idx}><Image src={el}/></Card>
})

const imagesModalTab = () => {
    return (
        <div>
            <Modal.Header icon='browser' >
                <h1> Pick A Pic! </h1>
            </Modal.Header>

            <Modal.Content>
                <Card.Group itemsPerRow={4}>
                    {mapImagesToCard()}

                </Card.Group>
            </Modal.Content>
        </div>
    )
}

export default imagesModalTab