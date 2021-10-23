/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package flashcards;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

/**
 *
 * @author pinter
 */
public class FlashcardsModel {

    private ArrayList<Card> cards;
    private int cardIndex;
    private boolean showQuestion;
    private int score;

    public FlashcardsModel() {
        cards = new ArrayList<>();
    }

    public String currentCardText() {
        if (!hasCards()) {
            return "Please open a cards file...";
        }
        if (cardIndex < numCards()) {
            if (showQuestion) {
                return getCurrentCard().getQuestion();
            } else {
                return getCurrentCard().getAnswer();
            }
        } else {
            return "The End";
        }
    }

    public void read(File file) throws FileNotFoundException, IOException {
        BufferedReader br = new BufferedReader(new FileReader(file));
        String line;
        while ((line = br.readLine()) != null) {
            String[] qa = line.split("~");
            if (qa.length == 2) {
                addCard(qa[0], qa[1]);
            }
        }
    }

    public void nextCard(boolean incScore) {
        if (hasCards() && cardIndex < cards.size()) {
            if (incScore) {
                score++;
            }
            cardIndex++;
            showQuestion = true;
        }
    }

    public void addCard(String question, String answer) {
        cards.add(new Card(question, answer));
    }

    public Card getCurrentCard() {
        return cards.get(cardIndex);
    }

    public boolean hasCards() {
        return !cards.isEmpty();
    }

    public int numCards() {
        return cards.size();
    }

    public void reset() {
        score = 0;
        cardIndex = 0;
        showQuestion = true;
    }

    public int getCardIndex() {
        return cardIndex;
    }

    public void setShowQuestion(boolean showQuestion) {
        this.showQuestion = showQuestion;
    }

    public boolean isShowQuestion() {
        return showQuestion;
    }

    public int getScore() {
        return score;
    }

}
