import matplotlib.pyplot as plt

data = [9, 57, 6, 145, 33]

labels = ['Somewhat Difficult', 'Neutral', 'Hardest', 'Somewhat Easy', 'Easiest']

colors = ['skyblue', 'lightcoral', 'red', 'lightgreen', 'yellow']

plt.pie(data, labels=labels, autopct="%1.1f%%", startangle=140, colors=colors)
plt.title('')

plt.legend(labels, loc="best")

plt.axis('equal')  

print("Stats And Probnigga")
plt.show()
