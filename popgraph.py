import matplotlib.pyplot as plt

# Create data list with 7 data points
data = [85, 91, 38, 83, 106, 67, 201]

# Ensure percentages sum to almost 100 (accounting for rounding errors)
total = sum(data)
data = [round(value / total * 100, 1) for value in data]

# Adjust the last data point to ensure the sum is exactly 100
data[-1] -= sum(data) - 100

# Create list of labels for 7 data points (replace with your labels)
labels = ["HE", "ICT", "AS", "GAS", "ABM", "STEM", "HUMSS"]

# Create a list of colors for 7 data points
colors = ['skyblue', 'lightcoral', 'red', 'lightgreen', 'yellow', 'purple', 'pink']

# Create a pie chart with 7 data points
plt.pie(data, labels=labels, autopct="%.1f%%", startangle=140, colors=colors)
plt.title('Population of the Strands')

# Add a legend with 7 labels
plt.legend(labels, loc="best")

# Equal aspect ratio ensures that pie is drawn as a circle.
plt.axis('equal')

print("Stats and Probability")
plt.show()
