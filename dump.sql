--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: enum_card_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_card_type AS ENUM (
    'CREDIT',
    'DEBIT',
    'BOTH'
);


ALTER TYPE public.enum_card_type OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Cards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Cards" (
    id integer NOT NULL,
    user_id integer NOT NULL,
    card_number text NOT NULL,
    card_name text NOT NULL,
    card_cvv text NOT NULL,
    card_expirate text NOT NULL,
    card_password text NOT NULL,
    card_is_virtual boolean NOT NULL,
    card_type public.enum_card_type DEFAULT 'BOTH'::public.enum_card_type NOT NULL,
    tittle text NOT NULL
);


ALTER TABLE public."Cards" OWNER TO postgres;

--
-- Name: Cards_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Cards_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Cards_id_seq" OWNER TO postgres;

--
-- Name: Cards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Cards_id_seq" OWNED BY public."Cards".id;


--
-- Name: Credentials; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Credentials" (
    id integer NOT NULL,
    user_id integer NOT NULL,
    url text NOT NULL,
    url_user text NOT NULL,
    url_password text NOT NULL,
    tittle text NOT NULL
);


ALTER TABLE public."Credentials" OWNER TO postgres;

--
-- Name: Credentials_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Credentials_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Credentials_id_seq" OWNER TO postgres;

--
-- Name: Credentials_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Credentials_id_seq" OWNED BY public."Credentials".id;


--
-- Name: Notes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Notes" (
    id integer NOT NULL,
    user_id integer NOT NULL,
    note text NOT NULL,
    tittle text NOT NULL
);


ALTER TABLE public."Notes" OWNER TO postgres;

--
-- Name: Notes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Notes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Notes_id_seq" OWNER TO postgres;

--
-- Name: Notes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Notes_id_seq" OWNED BY public."Notes".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: Wifis; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Wifis" (
    id integer NOT NULL,
    user_id integer NOT NULL,
    network_name text NOT NULL,
    network_password text NOT NULL,
    tittle text NOT NULL
);


ALTER TABLE public."Wifis" OWNER TO postgres;

--
-- Name: Wifis_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Wifis_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Wifis_id_seq" OWNER TO postgres;

--
-- Name: Wifis_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Wifis_id_seq" OWNED BY public."Wifis".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Cards id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cards" ALTER COLUMN id SET DEFAULT nextval('public."Cards_id_seq"'::regclass);


--
-- Name: Credentials id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Credentials" ALTER COLUMN id SET DEFAULT nextval('public."Credentials_id_seq"'::regclass);


--
-- Name: Notes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Notes" ALTER COLUMN id SET DEFAULT nextval('public."Notes_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Name: Wifis id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Wifis" ALTER COLUMN id SET DEFAULT nextval('public."Wifis_id_seq"'::regclass);


--
-- Data for Name: Cards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Cards" (id, user_id, card_number, card_name, card_cvv, card_expirate, card_password, card_is_virtual, card_type, tittle) FROM stdin;
3	2	5000400030001000	João Santos	a379eb85319971480e50f743fa7864fe35e737f53167a3cc588a5ee09798ced19caf6eb7550be3125943ce15f7b5f6fac5eba1fbdc85c04ffedd9edc2a07e96d1de8d6a6397325131dfd5c84ac839022b60c83ac63afb46e0ecc7851f46b909a4a18ad	12/99	0a758e5f2541f56ef1eaca6a7ca2943daa0a6f3303748786e8ee9f5154f99ef588ddd550c3ac14507ca503d2911dfbb6c792349aff360b20dee0134c55c53cf6adab3acae82a6d42d43c4bd753a9917f255dc9b47d36a156b9fde7ec9a6a9fe50df0730a	f	CREDIT	Driven Bank 1X3X
4	2	5000400030001000	João Santos	b6973ae248402fdc4413e5c1216884f950bc4c472ef40c2eebc1771738d2bf383279af8f41a6b82b1d7e2d9f5e17a8be29f086c034fa428f0c1e6f2d956cf883afe62fcdb1a464175ac5c9c103fffa73a79a3dacb1d8a080cd04984b7d47e0d9e4fb81	12/99	94eb204abbf15c91c4e4db10df68baf9e587d7de226910d47c3cb1af9015856cc2ef74167f694ee8a9ddb13dbc8c77b5f6f8e50450e99eef8a8a0b563aa27b34c63c4d4f267a0c14dd95442d7f0e97555a1d21b611eec1cbb4079ecc5707a1cecce27476	f	BOTH	Driven Bank dale dale dale
6	1	5000400030001000	João Santos	54c6913c3d9ccbcd9c1ab839797ece6057d253f16a10d7a3c7bd7ff556ca6427e76b4ee686c1eb7589aa7895f8479c4e0e119f87c397845cab6a09cf61a78c5267e728a61fedefe025fe8cc03a69140f8a2252dc0edad9850b34f905f86e035ec4a85c	12/99	e8e1f06b089069a1e1c1c7dda3e98894faad0cfbe7656877478f0265e5c997534242d2b7e6d90776a30cf27f11e6cddb7fcb654dfee6b7ec180262d91281fa51ad1fca9d9bd3c62988ff10f0a482d9d563f16c637bbd4a50321527d32928e94eeedbf891	f	BOTH	Driven Bank 2X
\.


--
-- Data for Name: Credentials; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Credentials" (id, user_id, url, url_user, url_password, tittle) FROM stdin;
6	2	https://www.youtube.com/	User 1	995e9aef79d05933efaac9bc1509f7a1a01671b03856d65528d2cf8ae841a40aa626e0a78cd4a7a4f0ac161415ba4dab79d9aff5c1e00be074e1de09a360acc1da0acd785556fa45ec87d46898ae34793afce95bc3d1a9bf5491e21f97c5584cfd8af4c78525	Tittle X2
7	2	https://www.youtube.com/	User 1	dc9c9f631f35bcea465270a277b6d67756737ca9cdb2fa8d1c7ce9d0723c354ccb87a1ceaac1ae856de5004e1c9fe6348df41d258881b6bff3fb5528a317a062ae00d368175d620ccbec590c3e248290141293d0b7699364a8723fc9d7c7201ed140dc26079e	Tittle X3
\.


--
-- Data for Name: Notes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Notes" (id, user_id, note, tittle) FROM stdin;
7	1	tchau tchau tchau	Titulo legal 6
9	1	tchau tchau tchau	Titulo legal 7
10	1	tchau tchau tchau	Titulo legal 8
11	1	tchau tchau tchau	Titulo legal 9
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, email, password) FROM stdin;
1	test0@test.com	$2b$10$EWVK9.r/gSlyFU.RZ6Wi5ezoSE3waxrWv9ZUVdMbzpCqZ6FDpXA.O
2	test1@test.com	$2b$10$sY7C/o3h01mUtdoezQjduOP8MxQiVWvcpkdHdc6zT4zZEiiqR.6nm
\.


--
-- Data for Name: Wifis; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Wifis" (id, user_id, network_name, network_password, tittle) FROM stdin;
4	1	GVT0002	d8f15c4b020716d4cf77f3495cc05e601958fcd5ad9635d2fbd4b8190edb633daa5c2cc7a434443aa053b379fddb85d512cc97e7ca9799b6b2a4578e4ad9074035c010bbf832ee56af6690167baedec9232442b4b09d02f420a334e4a54705ee8c1484eb	Wifi do vizinho 1 
5	1	GVT0002	d8a08c6f63d527f7fef529319f8aba1d99faca8e3496b560d7bdbf4a4cc8f756752aa6aa187b83bde97fddda65ced7e224ee87feaec897b8e5feb6bf38e8b1dfe9b6faa9828d79919c334855254907da588b8738c59e9739cc515d4b3e7a4388636d16e6	Wifi do vizinho 1 
6	1	GVT0002	8a2842b111323d12004646d0950b74825b5dc1d3812a3b7e53e042169c1107b3e245d97184411a58a5b9ecdefbe03eb356e6fcdef4262402a20e3a0eb5a5687d3ec6ff32ce99e9027f5da790bf706cb85edee3bc38411e5ec5d82a8ef35db1074dde7a04	Wifi do vizinho 1 
9	2	GVTXXX1	4929d7208edbb03c427eb9a01379d5108d1148ab7c90d0c4d51606353f29a91544a8d5dc2cc9d95c95bc3d70c232a86930ba177cbb898f8cdc3bf08735d20f35b5c1380339adf53a1fd68ad728bb9180223a18bd1a6a4b8fa8d5aa15e6c030653920563b	Meu wifi
10	2	GVTXXX1	0f973877669478c3d5522891068d2966e0ff558204aacde3f9dabda8a78baf84416ed640614d09bbe29bb9e52b8ca22977d1517961f921c6c403c3110fd147797a9cdef79a00b7ff531a7dcc024951fd56b54ca5faf251902b6830cea6381de94bd4f333	Meu wifi 1
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
a9a93316-1264-43bb-a207-c062817d1f98	f9b86527f6f2d732355941f281a1eb85f249efd9280aaeaed18b8283397a85dd	2022-09-08 16:05:45.701056-03	20220908004932_create_users_model	\N	\N	2022-09-08 16:05:45.682102-03	1
3a3304e8-6a64-46e8-9036-47f1ea08d9cc	2a3827953a7669a83b369144789b1217918c428e1bc13988f3974e8f208eb9a1	2022-09-08 16:05:57.349452-03	20220908190557_create_notes_model	\N	\N	2022-09-08 16:05:57.327717-03	1
4dc7037d-01d3-4e59-af86-5a086b7eb2f7	aadd9952339c99b19f3f03991977db8a77883ab9d7c5333a8b9b882fa42fa9b1	2022-09-09 01:26:48.242733-03	20220909042648_create_wifis_model	\N	\N	2022-09-09 01:26:48.215344-03	1
c27cab52-1662-4396-a413-9b5aebf8b329	d512209fd33198e1ca1178301e6f0a94de52a9f06945c980baeeb64741b737a9	2022-09-09 17:46:45.103887-03	20220909204645_create_credentials_model	\N	\N	2022-09-09 17:46:45.075277-03	1
0089415c-5033-426a-9eae-44c5c2cbfcc5	9b6375924999970875405bc0d4f24b7ee1a366c58d84bbce3982ca3597e27bdd	2022-09-10 02:20:25.937161-03	20220910052025_create_cards_model	\N	\N	2022-09-10 02:20:25.917731-03	1
\.


--
-- Name: Cards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Cards_id_seq"', 6, true);


--
-- Name: Credentials_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Credentials_id_seq"', 8, true);


--
-- Name: Notes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Notes_id_seq"', 11, true);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 2, true);


--
-- Name: Wifis_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Wifis_id_seq"', 11, true);


--
-- Name: Cards Cards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cards"
    ADD CONSTRAINT "Cards_pkey" PRIMARY KEY (id);


--
-- Name: Credentials Credentials_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Credentials"
    ADD CONSTRAINT "Credentials_pkey" PRIMARY KEY (id);


--
-- Name: Notes Notes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Notes"
    ADD CONSTRAINT "Notes_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Wifis Wifis_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Wifis"
    ADD CONSTRAINT "Wifis_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Users_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Users_email_key" ON public."Users" USING btree (email);


--
-- Name: Cards Cards_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cards"
    ADD CONSTRAINT "Cards_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id);


--
-- Name: Credentials Credentials_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Credentials"
    ADD CONSTRAINT "Credentials_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id);


--
-- Name: Notes Notes_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Notes"
    ADD CONSTRAINT "Notes_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id);


--
-- Name: Wifis Wifis_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Wifis"
    ADD CONSTRAINT "Wifis_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id);


--
-- PostgreSQL database dump complete
--

