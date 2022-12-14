export interface CovenAsset {
  animation_original_url: string;
  animation_url: string;
  asset_contract: {
    address: string;
    asset_contract_type: string;
    buyer_fee_basis_points: number;
    created_date: string;
    default_to_fiat: boolean;
    description: string;
    dev_buyer_fee_basis_points: number;
    dev_seller_fee_basis_points: number;
    external_link: string;
    image_url: string;
    name: string;
    nft_version: string;
    only_proxied_transfers: boolean;
    opensea_buyer_fee_basis_points: number;
    opensea_seller_fee_basis_points: number;
    opensea_version: string | null;
    owner: number;
    payout_address: string;
    schema_name: string;
    seller_fee_basis_points: number;
    symbol: string;
    total_supply: number | string | null;
  };
  background_color: string | null;
  collection: {
    banner_image_url: string;
    chat_url: string | null;
    created_date: string;
    default_to_fiat: boolean;
    description: string;
    dev_buyer_fee_basis_points: string;
    dev_seller_fee_basis_points: string;
    discord_url: string;
    display_data: {
      card_display_style: string;
    };
    external_url: string;
    featured: boolean;
    featured_image_url: string;
    hidden: boolean;
    image_url: string;
    instagram_username: string;
    is_nsfw: boolean;
    is_subject_to_whitelist: boolean;
    large_image_url: string;
    medium_username: string | null;
    name: string;
    only_proxied_transfers: boolean;
    opensea_buyer_fee_basis_points: string;
    opensea_seller_fee_basis_points: string;
    payout_address: string;
    require_email: boolean;
    safelist_request_status: string;
    short_description: string | null;
    slug: string;
    telegram_url: string | null;
    twitter_username: string;
    wiki_url: string | null;
  };
  creator: {
    address: string;
    config: string;
    profile_img_url: string;
    user: {
      username: string;
    };
  };
  decimals: number;
  description: string;
  external_link: string;
  id: number;
  image_original_url: string;
  image_preview_url: string;
  image_thumbnail_url: string;
  image_url: string;
  is_nsfw: boolean;
  is_presale: boolean;
  last_sale: string | null;
  listing_date: string | null;
  name: string;
  num_sales: number;
  owner: {
    address: string;
    config: string;
    profile_img_url: string;
    user: string | null;
  };
  permalink: string;
  rarity_data: string | null;
  seaport_sell_orders: string | null;
  token_id: string;
  token_metadata: string;
  top_bid: number | null;
  traits: CovenTrait[];
  transfer_fee: number | null;
  transfer_fee_payment_token: string | null;
}

export interface CovenTrait {
  display_type: string | null;
  max_value: number | null;
  order: null;
  trait_count: number;
  trait_type: string;
  value: string;
}

export enum WitchArchetype {
  MAGE = "mage",
  HAG = "hag",
  OCCULTIST = "occultist",
  SEER = "seer",
  NECROMANCER = "necromancer",
  ENCHANTRESS = "enchantress",
}
