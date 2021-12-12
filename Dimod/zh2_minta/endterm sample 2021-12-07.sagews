︠447baaba-1eaf-4e4b-8f29-60e1da83aa3far︠
%auto
typeset_mode(True, display=False)
︡a41c75c2-b80d-422a-a745-00d697756560︡
︠8212b3a9-4591-4cbf-b04c-77ef0537ec3bi︠
%html
<p>Problems 1 and 2 should be straightforward - will work them out on paper and upload to Teams</p>

<p>Problem 3</p>

︡ad400619-2eb1-4909-9a39-a51de1ab5217︡{"html": "<p>Problems 1 and 2 should be straightforward - will work them out on paper and upload to Teams</p>\n\n<p>Problem 3</p>"}︡
︠83026a0c-00c3-4262-b321-4edb99656cf3︠
# A 
R.<x> = PolynomialRing(QQ)
︡582ebac7-f28a-486e-ba5a-6d4555eb19c0︡︡
︠85e9ae23-2a7b-4e59-aa9a-fd5c9244cba8︠
G = R.lagrange_polynomial([(0, 1), (1, 2), (2, 4), (3, 8), (4, 16)])
G
︡be87544e-1a76-41af-997d-cae2266204a6︡{"stdout": "1/24*x^4 - 1/12*x^3 + 11/24*x^2 + 7/12*x + 1"}︡
︠a9b41548-9ba4-4085-acc5-d668d230ce46︠
G(5), G(6)
︡d6a042e7-8cc3-4a94-956f-74d54b5de77a︡{"stdout": "(31, 57)"}︡
︠c0567a53-7f98-4df7-9c1f-11fb33230f1d︠
# B
R.<x> = PolynomialRing(IntegerModRing(7))
G = R.lagrange_polynomial([(0, 1), (1, 2), (2, 4), (3, 8), (4, 16)])
G, G(5), G(6)
︡123682f2-957b-437e-841c-386b92f9cf41︡{"stdout": "(5*x^4 + 4*x^3 + 6*x^2 + 1, 3, 1)"}︡
︠7fbf53e5-f339-4f26-a446-3691f3770f11︠
# C
# No such polynomial: 0 = 4 (mod 4), but G(0) = 1 != 0 = 16 = G(4) (mod 4)
︡7b4358e1-bee3-4ee3-8057-181889d88839︡︡
︠d3d6c952-68bf-490e-9577-caac441b53adi︠
%html
<p>Problem 4</p>

︡479dc2ce-15a6-4ad1-b0ba-f90da632d3af︡{"html": "<p>Problem 4</p>"}︡
︠bf98eb6b-bc44-44b7-b425-2465abcf2ec2︠
R.<x> = PolynomialRing(IntegerModRing(13))
L = []
for p in [0..12]:
    for q in [0..12]:
        for m in [0..12]: 
            f = x^4 + p*x + q 
            g = x^2 + m*x + 1
            r = f.quo_rem(g)[1]
            if r == 0:
                 L.append((p, q, m))
︡cdea2568-2356-47bb-a49e-e0bf691fd3c1︡︡
︠3e1ba374-8435-4691-b012-f7846ee8e29e︠
L
︡6c17b3a4-dfff-4bd3-bb7f-8ba50c996525︡{"stdout": "[(0, 12, 0),\n (1, 0, 12),\n (2, 11, 8),\n (4, 2, 4),\n (4, 3, 2),\n (4, 9, 7),\n (5, 8, 10),\n (8, 8, 3),\n (9, 2, 9),\n (9, 3, 11),\n (9, 9, 6),\n (11, 11, 5),\n (12, 0, 1)]"}︡
︠eaf9e5d8-f98e-4d11-898f-e79dd1967898i︠
%html
<p>Problem 5</p>

︡7ef6d8fb-c642-4ee9-b1dd-9c41399fe0b7︡{"html": "<p>Problem 5</p>"}︡
︠8bfd1946-0175-4007-af5d-ccdff25b93bd︠
# Functions from previous weeks
def distW(L1, L2):
    n = len(L1)
    s = 0
    for i in range(n):
        if L1[i] != L2[i]:
            s += 1
    return s
def distC(H):
    return min ([distW(x, y) for x in H for y in H if x!=y])
︡cb2d78a4-e4e6-40db-b47a-20de73830db4︡︡
︠d0f6cbb3-95a3-4a57-9734-7d538b009c2a︠
K = IntegerModRing(5)
code = [(a, b, c, a+b+c, a + 2*b + a*b*c) for a in K for b in K for c in K]
︡25048aa1-0393-4310-806b-0d3ec409a205︡︡
︠99325dd1-158a-48da-9a1c-0b7babb3ef7f︠
distC(code)
︡80a82015-e90f-463a-aff9-26f9369589e2︡{"stdout": "2"}︡
︠66f6ed53-74b8-4b16-9b20-444f519594a4︠
L = []
for x in code:
    for y in code:
        if distW(x, y) == 2 and x != y:
            L.append((x,y))
︡589e7397-1703-46b1-b896-7db08a2364b0︡︡
︠fd907880-478c-4f7a-ad23-7766c174ffaf︠
# Now L contains all pairs that are only distance 2 apart. We have to remove some of the codewords so that we also remove at least one element from each mentioned pair. ​
# Beelow there's a possible solution based on graphs. Don't worry, this part isn't worth too many points
︡60ca7204-43c8-4565-89b3-b1e471aacbd6︡︡
︠2677929f-fb15-4dc7-b41b-2fde7024b0fa︠
G = Graph([code, lambda i,j: (i, j) in L])
︡e46bc8dd-cf80-4588-a273-204c689c367e︡︡
︠5a8c5571-e214-4c48-a11b-dfd9fb0aa89d︠
G.show()
︡8fb56d44-944e-477f-b5bd-16da5de05ec7︡︡
︠c81295b8-a4a9-43ea-b6d6-c75250545830︠
H = G.vertex_cover()
︡f73e9e9a-ab7f-4d10-948a-e3d45fab7941︡︡
︠ec2d6f36-441e-4c24-aef9-5c8fca2ba344︠
len(H)
︡989288e1-b241-4dcf-b9ac-8817a4ec5f62︡{"stdout": "76"}︡









