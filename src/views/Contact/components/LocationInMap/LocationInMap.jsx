
const LocationInMap = () => {
  return (
    <div className="w-full px-[15px] mx-auto">
      <div className="row">
        <div className="col-md-12 !p-0">
          <div className="!w-full relative text-right h-[500px]">
            <div className="overflow-hidden bg-none h-[500px]">
              <iframe
                width="100%"
                height="500"
                id="gmap_canvas"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?q=goodcore%20software%20ltd%20Airport%20House%20Purley%20Way%20Croydon%20CR0%200XZ%20Greater%20London%20United%20Kingdom&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInMap;
