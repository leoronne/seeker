export interface CharacterData {
  id: number;
  aliases: string;
  api_detail_url: string;
  birth: string;
  count_of_issue_appearances: number;
  creators: Array<{
    api_detail_url: string;
    id: number;
    name: string;
    site_detail_url: string;
  }>;
  deck: string;
  gender: number;
  image: {
    icon_url: string;
    medium_url: string;
    screen_url: string;
    screen_large_url: string;
    small_url: string;
    super_url: string;
    thumb_url: string;
    tiny_url: string;
    original_url: string;
    image_tags: string;
  };
  name: string;
  origin: {
    api_detail_url: string;
    id: number;
    name: string;
  };
  powers: Array<{
    api_detail_url: string;
    id: number;
    name: string;
  }>;
  publisher: {
    api_detail_url: string;
    id: number;
    name: string;
  };
  real_name: string;
  site_detail_url: string;
  isFave: boolean;
}

export interface GetCharacterResponse {
  error: string;
  limit: number;
  offset: number;
  number_of_page_results: number;
  number_of_total_results: number;
  status_code: number;
  results: CharacterData;
}
