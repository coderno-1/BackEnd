// BankAccount.java
class BankAccount {
    private double balance;  // private variable

    // Setter method — sets the balance
    public void setBalance(double amount) {
        if (amount >= 0) {
            balance = amount;
        } else {
            System.out.println("Invalid amount. Balance cannot be negative.");
        }
    }

    // Getter method — returns the balance
    public double getBalance() {
        return balance;
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();

        account.setBalance(5000.75);  // setting balance
        System.out.println("Current Balance: ₹" + account.getBalance());  // getting balance
    }
}