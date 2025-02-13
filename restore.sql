toc.dat                                                                                             0000600 0004000 0002000 00000005373 14635602756 0014465 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP                       |            db_repertorio_music    16.2    16.2     �           0    0    ENCODING    ENCODING         SET client_encoding = 'LATIN1';
                      false         �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         �           1262    33082    db_repertorio_music    DATABASE     �   CREATE DATABASE db_repertorio_music WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
 #   DROP DATABASE db_repertorio_music;
                postgres    false         �            1259    33282 	   Canciones    TABLE     �   CREATE TABLE public."Canciones" (
    id integer NOT NULL,
    titulo character varying(50) NOT NULL,
    artista character varying(50) NOT NULL,
    tono character varying(10) NOT NULL
);
    DROP TABLE public."Canciones";
       public         heap    postgres    false         �            1259    33281    Canciones_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Canciones_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Canciones_id_seq";
       public          postgres    false    216         �           0    0    Canciones_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Canciones_id_seq" OWNED BY public."Canciones".id;
          public          postgres    false    215         P           2604    33285    Canciones id    DEFAULT     p   ALTER TABLE ONLY public."Canciones" ALTER COLUMN id SET DEFAULT nextval('public."Canciones_id_seq"'::regclass);
 =   ALTER TABLE public."Canciones" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216         �          0    33282 	   Canciones 
   TABLE DATA           @   COPY public."Canciones" (id, titulo, artista, tono) FROM stdin;
    public          postgres    false    216       4835.dat �           0    0    Canciones_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Canciones_id_seq"', 1, true);
          public          postgres    false    215         R           2606    33287    Canciones Canciones_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Canciones"
    ADD CONSTRAINT "Canciones_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Canciones" DROP CONSTRAINT "Canciones_pkey";
       public            postgres    false    216                                                                                                                                                                                                                                                                             4835.dat                                                                                            0000600 0004000 0002000 00000000040 14635602756 0014265 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	In my life	The Beatles	D
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                restore.sql                                                                                         0000600 0004000 0002000 00000005550 14635602756 0015407 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'LATIN1';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE db_repertorio_music;
--
-- Name: db_repertorio_music; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE db_repertorio_music WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';


ALTER DATABASE db_repertorio_music OWNER TO postgres;

\connect db_repertorio_music

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'LATIN1';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Canciones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Canciones" (
    id integer NOT NULL,
    titulo character varying(50) NOT NULL,
    artista character varying(50) NOT NULL,
    tono character varying(10) NOT NULL
);


ALTER TABLE public."Canciones" OWNER TO postgres;

--
-- Name: Canciones_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Canciones_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Canciones_id_seq" OWNER TO postgres;

--
-- Name: Canciones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Canciones_id_seq" OWNED BY public."Canciones".id;


--
-- Name: Canciones id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Canciones" ALTER COLUMN id SET DEFAULT nextval('public."Canciones_id_seq"'::regclass);


--
-- Data for Name: Canciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Canciones" (id, titulo, artista, tono) FROM stdin;
\.
COPY public."Canciones" (id, titulo, artista, tono) FROM '$$PATH$$/4835.dat';

--
-- Name: Canciones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Canciones_id_seq"', 1, true);


--
-- Name: Canciones Canciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Canciones"
    ADD CONSTRAINT "Canciones_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        