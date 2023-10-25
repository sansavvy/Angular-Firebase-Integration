import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input('isLogged') isLogged: boolean = false;
  @Output('openForm') openForm: EventEmitter<boolean> = new EventEmitter();
  sampleData: any[] = [];
  // sampleData: any[] = [
  //   {
  //     id: '1',
  //     cardTitle: 'East Point,Georgia,US',
  //     cardDesc:
  //       'Stay with Angela - Co living SoFlo Garden Pool and great people',
  //     link: 'https://www.airbnb.co.in/rooms/669733141078005873?category_tag=Tag%3A5348&enable_m3_private_room=true&photo_id=1450979558&check_in=2023-11-22&check_out=2023-11-23&source_impression_id=p3_1695629985_LXif4U4QdvnEfNSs&previous_page_section_name=1000&federated_search_id=767f9328-80de-49e7-b0e6-1ed5fc615746',
  //     imgRef: 'assets/Images/pic1.jpg',
  //   },
  //   {
  //     id: '2',
  //     cardTitle: 'San Jose,California,US',
  //     cardDesc: 'Stay with Bran - Dockside Boat & Bed, Caseata',
  //     link: 'https://www.airbnb.co.in/rooms/1358042?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2023-11-12&check_out=2023-11-17&source_impression_id=p3_1695630060_4sj8jyWOMvjuTQSr&previous_page_section_name=1000&federated_search_id=30322149-8840-4167-acc3-635767ca3720',
  //     imgRef: 'assets/Images/pic2.jpg',
  //   },
  //   {
  //     id: '3',
  //     cardTitle: 'New Orleans,Lousiana,US',
  //     cardDesc: 'Stay with Nathen - White Cloud; LakeView/Pool/Hot Tub',
  //     link: 'https://www.airbnb.co.in/rooms/12866972?category_tag=Tag%3A8678&enable_m3_private_room=true&photo_id=1572811162&search_mode=flex_destinations_search&check_in=2023-10-19&check_out=2023-10-20&source_impression_id=p3_1695630377_S4lx5FT%2BjQsbJllA&previous_page_section_name=1000&federated_search_id=2bf6762b-9ed3-488c-a449-853aa58ad234',
  //     imgRef: 'assets/Images/pic3.jpg',
  //   },
  //   {
  //     id: '4',
  //     cardTitle: 'Phoneix,Arizona,US',
  //     cardDesc:
  //       'Stay with Victoria - Scottsdale-RoomB-Pool-Shopping-Golf-Free Breakfast',
  //     link: 'https://www.airbnb.co.in/rooms/572445317288066599?category_tag=Tag%3A8678&enable_m3_private_room=true&photo_id=1379404190&check_in=2023-11-10&check_out=2023-11-11&source_impression_id=p3_1695630451_ykroRm5W%2FJvu1PbF&previous_page_section_name=1000&federated_search_id=cb069121-86dd-44c5-b94d-8e1b3ba4f677',
  //     imgRef: 'assets/Images/pic4.jpg',
  //   },
  //   {
  //     id: '5',
  //     cardTitle: 'Hamburg,Newyork,US',
  //     cardDesc:
  //       'Stay with chriss Pat - Secluded Lakeview-Summit Neighborhood Self Checkin',
  //     link: 'https://www.airbnb.co.in/rooms/32990460?check_in=2023-11-21&check_out=2023-11-22&source_impression_id=p3_1695630517_oNVIrOUw9ldW%2BDMc&previous_page_section_name=1000&federated_search_id=783e46d0-b9fd-4dfa-a5f1-5493ded7d2c1',
  //     imgRef: 'assets/Images/pic5.jpg',
  //   },
  //   {
  //     id: '6',
  //     cardTitle: 'Waterloo,Illnois,US',
  //     cardDesc: 'Stay with Linn - Cozy private king bed 18 mins to DTLA',
  //     link: 'https://www.airbnb.co.in/rooms/887659351158762736?check_in=2023-10-12&check_out=2023-10-13&source_impression_id=p3_1695630551_8mzMBK13rwC0I13s&previous_page_section_name=1000&federated_search_id=b18d8a6d-b5c3-4a95-a11a-fad3c4eee873',
  //     imgRef: 'assets/Images/pic6.jpg',
  //   },
  //   {
  //     id: '7',
  //     cardTitle: 'Kissimme,Florida,US',
  //     cardDesc: 'Stay with Bryce - Trendy room in great central neighborhood!',
  //     link: 'https://www.airbnb.co.in/rooms/722961649348693806?category_tag=Tag%3A8678&enable_m3_private_room=true&photo_id=1496784741&check_in=2023-10-20&check_out=2023-10-21&source_impression_id=p3_1695630584_HnCWZg8Ppr1SsdUj&previous_page_section_name=1000&federated_search_id=df67ab23-9d9a-44d6-988c-659782ee2604',
  //     imgRef: 'assets/Images/pic7.jpg',
  //   },
  //   {
  //     id: '8',
  //     cardTitle: 'Seattle,Washington,US',
  //     cardDesc:
  //       'Stay with Helen - Queen bed free parking ATL 4K HBO Hulu Disney+',
  //     link: 'https://www.airbnb.co.in/rooms/2391699?adults=1&category_tag=Tag%3A8678&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=924981409&check_in=2023-11-16&check_out=2023-11-21&source_impression_id=p3_1695630616_iTtVGsGfCcKS1eE5&previous_page_section_name=1000&federated_search_id=9a6f1a87-3aba-450e-ab4f-d25528ecb49d',
  //     imgRef: 'assets/Images/pic8.jpg',
  //   },
  //   {
  //     id: '9',
  //     cardTitle: 'Oakville,Canada',
  //     cardDesc:
  //       'Stay with Jordan - 1BR/1BA with Private Entrance, 5min to PHX Airport',
  //     link: 'https://www.airbnb.co.in/s/Oakville--Ontario--Canada/homes?flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2023-10-01&monthly_length=3&query=Oakville%2C%20Ontario%2C%20Canada&place_id=ChIJeZlyj4tbK4gR0Bsjxyh7AwU&refinement_paths%5B%5D=%2Fhomes&tab_id=home_tab&date_picker_type=calendar&checkin=2023-10-06&checkout=2023-10-07&source=structured_search_input_header&search_type=autocomplete_click',
  //     imgRef: 'assets/Images/pic2.jpg',
  //   },
  //   {
  //     id: '10',
  //     cardTitle: 'Toronto,Canada',
  //     cardDesc:
  //       'Stay with Christine - Pool, FirePit, Fresh Eggs & Tranquility- Gray Room',
  //     link: 'https://www.airbnb.co.in/rooms/559713720777266868?adults=1&category_tag=Tag%3A8678&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1605079659&check_in=2023-10-24&check_out=2023-10-29&source_impression_id=p3_1695630688_Ncm3v4RusVZT4wds&previous_page_section_name=1000&federated_search_id=4458e377-5858-4ac9-bf18-2eaa406b04cd',
  //     imgRef: 'assets/Images/pic10.jpg',
  //   },
  //   {
  //     id: '11',
  //     cardTitle: 'Boulder,Colorado,US',
  //     cardDesc: 'Stay with Stewart - Nestled by the mountains',
  //     link: 'https://www.airbnb.co.in/rooms/50596733?adults=1&category_tag=Tag%3A8678&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1544352294&check_in=2023-10-01&check_out=2023-10-06&source_impression_id=p3_1695630733_DkCRVHCsVZPtT%2BSX&previous_page_section_name=1000&federated_search_id=0de35f4f-241b-4095-b248-c849871d8827',
  //     imgRef: 'assets/Images/pic3.jpg',
  //   },
  // ];

  constructor(private route: Router, private service: AuthService) {}

  ngOnInit() {
    this.service.getStayDetails().then((data) => {
      this.sampleData = data;
    });
  }
  goToDetails(link: any) {
    let url = link;
    window.open(url, '_blank');
    // this.route.navigate(link);
  }
  goToPlaces() {
    this.route.navigateByUrl('/explore-places');
  }

  gotoHome() {
    this.route.navigateByUrl('/sign-in');
  }
  gotoStay() {
    this.route.navigateByUrl('/view-articles');
  }
  gotoplaces() {
    this.route.navigateByUrl('/explore-places');
  }
  gotoContact() {
    this.route.navigateByUrl('/contact');
  }
}
