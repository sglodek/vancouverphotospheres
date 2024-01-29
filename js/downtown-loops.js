const downtownLoopsBase = "/panos/downtown-loops/"

const downtownLoops = new PhotoSphereViewer.Viewer({
    container: document.querySelector('#downtownLoops'),
    panorama: downtownLoopsBase + '2023-04-14/sd.jpg',
    defaultYaw: "242deg",
    defaultPitch: "-25deg",
    defaultZoomLvl: 70,
    plugins: [
        [PhotoSphereViewer.GalleryPlugin, {
            visibleOnLoad: false,
            thumbnailSize: { width: 100, height: 100 },
            items: [
                {
                    id: 'pano-1',
                    name: 'Apr 4',
                    panorama: 'panos/emily-carr-subway/2023-04-11/sd.jpg',
                    thumbnail: 'panos/emily-carr-subway/2023-04-11/thumbnail.jpg',
                },
                {
                    id: 'pano-2',
                    name: 'May 4',
                    panorama: 'panos/emily-carr-subway/2023-04-11/low.jpg',
                    thumbnail: 'panos/emily-carr-subway/2023-04-11/thumbnail.jpg',
                },
                {
                    id: 'pano-3',
                    name: 'Jun 4',
                    panorama: 'panos/emily-carr-subway/2023-04-11/sd.jpg',
                    thumbnail: 'panos/emily-carr-subway/2023-04-11/thumbnail.jpg',
                },
            ],
        }],
    ],
});
