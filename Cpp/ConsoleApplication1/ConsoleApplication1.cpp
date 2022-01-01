// A predicate_containers egy olyan
// template oszt�ly, ahol az els� template param�ter t�pus�nak megfelel� k�t
// szekvenci�lis kont�nerbe egy predik�tum (aminek t�pusa a m�sodik template
// param�ter) szerint t�roljuk el az elemeket. Az utols� n�h�ny ellen�rz�sn�l
// a kont�nerben t�rolt t�p�s nincs template param�terk�nt megadva.
// Konstruktorban megkapja a k�t szekvenci�lis kont�nert, amelyeknek b�rmi is
// volt is tartalmuk, �ress� v�lva insert tagf�ggv�nnyel adunk elemeket: ha
// az elem a predik�tum szerint igaz, akkor az els� kont�nerbe, k�l�nben a
// m�sodikba ker�l, tetsz�leges pozici�ra. A konstruktorban a predik�tum
// objektumot is megadom, hogy �llapottal rendelkez� funktorokat is lehessen
// haszn�lni. Ha a predik�tum nincs megadva konstruktor param�terk�nt, akkor
// default konstru�lni kell. Az erase a param�terk�nt megkapott elem �sszes
// el�fordul�s�t t�rli. Az intervallumot v�r� insert az intervallum �sszes
// elem�t hozz�adja a megfelel� kont�nerhez.

#include <iostream>
#include <cctype>
#include <deque>
#include "predconts.h"
#include <vector>
#include "predconts.h"
#include <algorithm>
#include <string>
#include <list>

class less_than
{

    int x;

public:

    less_than(int i) : x(i) { }

    bool operator()(int i) const
    {
        return i < x;
    }

};

class starts_with
{

    char ch;

public:

    starts_with(char c = 'C') : ch(c) { }

    bool operator()(const std::string& s) const
    {
        return s[0] == ch;
    }

};

struct is_even
{

    bool operator()(int i) const
    {
        return 0 == i % 2;
    }

};

struct is_lower
{

    bool operator()(unsigned char c) const
    {
        return std::islower(c);
    }

};

const int max = 1000;

bool check()
{
    std::list<int> cix;
    std::list<int> ciy;
    cix.push_front(6);
    ciy.push_front(4);

    predicate_containers<std::list<int>,
        less_than,
        int> pli(cix, ciy, less_than(5));

    pli.insert(1).insert(2).insert(4).insert(7).insert(1);

    std::vector<std::string> vsx;
    std::vector<std::string> vsy;
    vsx.push_back("Java");

    predicate_containers<std::vector<std::string>,
        starts_with,
        std::string> pvs(vsx, vsy, starts_with('C'));

    pvs.insert("Cobol").insert("C++").insert("Ruby").insert("C");

    std::deque<int> dix;
    std::deque<int> diy;
    predicate_containers<std::deque<int>,
        less_than,
        int> pdi(dix, diy, less_than(max / 2));

    for (int i = 0; i < max; ++i)
    {
        pdi.insert(i);
    }
    if (dix.size() != diy.size() || 1 != vsy.size() || 3 != vsx.size() ||
        "Ruby" != vsy[0] || 7 != ciy.front() || 4 != cix.size() ||
        1 != std::count(diy.begin(), diy.end(), max - 1) ||
        1 != std::count(vsx.begin(), vsx.end(), "C++"))
    {
        return false;
    }

    std::deque<std::string> dsx;
    std::deque<std::string> dsy;
    predicate_containers<std::deque<std::string>,
        starts_with,
        std::string> pds(dsx, dsy);

    for (int i = 0; i < max; ++i)
    {
        pds.insert("C++").insert("Cobol").insert("Perl").insert("Ada");
    }
    pds.erase("Ada").erase("Cobol");

    std::list<int> lia;
    std::list<int> lib;
    predicate_containers<std::list<int>, is_even, int> plii(lia, lib);
    plii.insert(1).insert(1).insert(2).insert(2);
    plii.insert(1).insert(3).erase(2).insert(4);

    if (1U * max != dsx.size() || 1U * max != dsy.size() ||
        max != std::count(dsy.begin(), dsy.end(), "Perl") ||
        4 != lia.front() || 4 != lib.size() ||
        (2 * max != pds.size() && 5 != plii.size()) ||
        3 != std::count(lib.begin(), lib.end(), 1))
    {
        return false;
    }

    std::vector<int> a;
    std::vector<int> b;
    predicate_containers<std::vector<int>, is_even> pc(a, b);
    int ar[] = { 3, 1, 4, 1, 5, 9, 2, 6, 5 };
    pc.insert(ar, ar + sizeof(ar) / sizeof(ar[0]));

    std::string sa;
    std::string sb;
    predicate_containers<std::string, is_lower> ps(sa, sb);
    std::string msg = "HelloWorld";
    ps.insert(msg.begin(), msg.end());

    return (9 == pc.size() && a.size() == 1U * 3 &&
        1 == std::count(b.begin(), b.end(), 3) &&
        msg.size() == ps.size() && 2 == sb.size() &&
        1 == std::count(sa.begin(), sa.end(), 'r'));
}

int main()
{
    std::cout
        << "Your solution is "
        << (check() ? "" : "not ")
        << "ready for submission."
        << std::endl;
}
