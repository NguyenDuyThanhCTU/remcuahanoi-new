export interface HeaderClientProps {
  label: string;
  value: string;
  children: CategoryProps[];
}

//Config Props
export interface InformationProps {
  ImageNotFound: string;
  NotFoundNavigate: string;
  LogoSnippet: string;
  LogoPosition: string;
  ogimage: string;
  ogtitle: string;
  ogdescription: string;
  twimage: string;
  twdescription: string;
  twtitle: string;
  analytics: string;
  remakerting: string;
  livechat: string;
}

export interface ContactProps {
  id: string;
  WebsiteAddress: string;
  Hotline: string;
  PhoneNumber: string;
  Email: string;
  WebsiteTime: string;
  CompanyTime: string;
  CompanyAddress: string;
  LogoWebsite: string | any;
  GoogleMap: string;
  direct: string;
}

export interface SEOProps {
  Title: string;
  Description: string;
  Favicon: string | any;
  Keyword: [];
}

// Product

export interface CategoryProps {
  id: string;
  stt: number;
  level0: string;
  level1: Array<any>;
  [key: string]: any;
  date: string;
}
export interface ProductProps {
  id: string;
  pId: string;
  title: string;
  url: string;
  stt: number;
  image: string;
  level0: string;
  date: string;
  group?: boolean;
  grouplv0?: string;
  grouplv1?: string;
  grouplv2?: any;
  branches?: string;
  price?: string;
  subimage?: {
    uid: string;
    url: string;
  }[];
  bestselling?: boolean;
  content?: string;
  description?: string;
  detail?: string;
  describe?: string;
  level1?: string;
  level2?: string;
  Keyword?: [] | any;
  discount?: string;
  discountedAmount?: string;
  newPrice?: string;
  subproduct?: [];

  addfield: boolean;
  field1: string;
  fiedl2: string;
  field3: string;
  fiedl4: string;
  fiedl5: string;
}

export interface SaleInfoProps {
  date: string;
  start: string;
  end: string;
  note?: string;
}

export interface SaleDataProps extends ProductProps {
  id: string;
  stt: number;
  discount: string;
  discountedAmount: string;
  newPrice: string;
}

// Post

export interface PostProps {
  id: string;
  stt: number;
  title: string;
  url: string;
  level0: string;

  level2?: string;
  date: string;
  image: string;
  keyword?: [];
  level1?: string;
  description?: string;
  content?: string;
  tags?: Array<string>;
  readingtime?: string;
  author?: string;
}

export interface introductoryProps {
  content: string;
  shortDescription: string;
  date: string;
  image: string;
  level0: "Introductory";
}

// Media

export interface SocialMediaProps {
  date: string;
  facebook?: string;
  zalo?: string;
  fanpage?: string;
  messenger?: string;
  instagram?: string;
  tiktok?: string;
  youtube?: string;
}

export interface SocialMediaDashboardProps {
  title: string;
  icon: string;
  image: string;
  style: string;
  field: string;
  Data: string | undefined;
}

export interface SlideProps {
  id: string;
  image: string;
  type?: string;
  url?: string;
  date: string;
  stt: number;
}

export interface CollectionProps {
  id: string;
  stt: number;
  date: string;
  image: string;
  type: "hinh-anh" | "video";
  video?: string;
  embedVideo: string;
  title?: string;
}

//Account

export interface AccountProps {
  stt: number;
  id: string;
  name: string;
  username: string;
  password: string;
  role: "editor" | "user" | "admin";
  status: "active" | "block";
  image: string;
  date: string;
  phone?: string;
  email?: string;
}

//Plugin

export interface BranchProps {
  stt: number;
  title: string;
  address: string;
  date: string;
  hotline?: string;
  name?: string;
  timeactive?: string;
}

export interface PartnerProps {
  stt: number;
  image: string;
  title: string;
  url: string;
  date: string;
}

export interface FeedbackProps {
  feedback: string;
  date: string;
  image: string;
  name: string;
  star: string;
}

export interface OrderProps {}
